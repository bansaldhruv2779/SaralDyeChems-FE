// import React, {useEffect, useRef, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchCategoryList} from "../../store/actions";
// import {get, transform} from "lodash";
// import {Box, Grid, Card, CardMedia, Typography, styled} from "@mui/material";
// import {useNavigate} from "react-router";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import {Carousel} from "react-responsive-carousel";
// import Products from "../Products/products.json";
// import CountsComponent from "../../components/Counts/Index";
// import AboutComponent from "../../components/AboutComponent/Index";
// import FounderComponent from "../../components/FounderComponent/Index";
// import Founder from "../../components/FounderComponent/Founder";
// const StyledCard = styled(Card)(({theme}) => ({
//   borderRadius: "12px",
//   overflow: "hidden",
//   position: "relative",
//   height: "250px",
//   width: "100%",
//   transition: "transform 0.3s, box-shadow 0.3s",
//   "&:hover": {
//     transform: "translateY(-10px)",
//     boxShadow: theme.shadows[5],
//   },
// }));

// const CardOverlay = styled(Box)(({theme}) => ({
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundColor: "rgba(0, 0, 0, 0.4)", // Light black overlay
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   transition: "background-color 0.3s",
//   "&:hover": {
//     backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay on hover
//   },
// }));

// const CategoryText = styled(Typography)(({theme}) => ({
//   color: "white",
//   position: "absolute",
//   bottom: "10px",
//   width: "100%",
//   left: "50%",
//   textAlign: "center",
//   transform: "translateX(-50%)",
//   fontSize: "20px",
//   boxShadow: theme.shadows[3],
//   borderRadius: "5px",
//   padding: "5px 10px",
//   transition: "all 0.3s ease",
//   "&:hover": {
//     bottom: "50%",
//     transform: "translate(-50%, 50%)",
//   },
// }));
// const Home = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // const {categories} = useSelector(state => state.products);
//   const [categories, setCategories] = useState(Products.data);

//   const ref = useRef(0);

//   useEffect(() => {
//     console.log(categories);
//     if (ref.current === 0) {
//       dispatch(fetchCategoryList.REQUEST());
//       ref.current = 1;
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return (
//     <Box>
//       {Array.isArray(categories) && categories.length > 0 ? (
//         <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
//           {categories.map((item, index) => {
//             return (
//               <Box key={index} height={"80vh"}>
//                 <img src={item.image} alt={item.image} />
//                 <p className="legend">{item.category}</p>
//               </Box>
//             );
//           })}
//         </Carousel>
//       ) : null}
//       <AboutComponent />
//       <CountsComponent />
//       <Founder />
//       <Grid container spacing={3} px={10} mt="36px">
//         <Grid item xs={12}>
//           <Grid container spacing={4} px="6vw">
//             <Grid item xs={12}>
//               <Typography
//                 variant="h5"
//                 fontWeight={600}
//                 textTransform="uppercase"
//                 fontSize="24px">
//                 SEGMENTS
//               </Typography>
//             </Grid>
//             {Array.isArray(categories)
//               ? categories.map((item, index) => (
//                   <Grid item xs={12} md={6} lg={4} key={index}>
//                     <StyledCard
//                       onClick={() => {
//                         navigate(
//                           `/products?category=${item.category}&products=${item.name}`,
//                         );
//                       }}>
//                       <img
//                         src={item.image}
//                         alt={item.category}
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <CardOverlay>
//                         <CategoryText>{item.category}</CategoryText>
//                       </CardOverlay>
//                     </StyledCard>
//                   </Grid>
//                 ))
//               : null}
//           </Grid>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Home;
import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchCategoryList} from "../../store/actions";
import {Box, Grid, Card, Typography, styled} from "@mui/material";
import {useNavigate} from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";
import Products from "../Products/products.json";
import CountsComponent from "../../components/Counts/Index";
import AboutComponent from "../../components/AboutComponent/Index";
import Founder from "../../components/FounderComponent/Founder";
import GalleryComponent from "../../components/GalleryComponent/GalleryComponent";

const StyledCard = styled(Card)(({theme}) => ({
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  height: "250px",
  width: "100%",
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: theme.shadows[5],
  },
}));

const CardOverlay = styled(Box)(({theme}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.4)", // Light black overlay
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Darker overlay on hover
  },
}));

const CategoryText = styled(Typography)(({theme}) => ({
  color: "white",
  position: "absolute",
  bottom: "10px",
  width: "100%",
  textAlign: "center",
  fontSize: "20px",
  boxShadow: theme.shadows[3],
  borderRadius: "5px",
  padding: "5px 10px",
  transition: "all 0.3s ease",
  transform: "translateY(0)",
  opacity: 1,
  "&:hover": {
    transform: "translateY(-50%)",
    opacity: 0,
  },
}));

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [categories, setCategories] = useState(Products.data);
  const ref = useRef(0);

  useEffect(() => {
    console.log(categories);
    if (ref.current === 0) {
      dispatch(fetchCategoryList.REQUEST());
      ref.current = 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box>
      {Array.isArray(categories) && categories.length > 0 ? (
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          {categories.map((item, index) => (
            <Box key={index} height={"80vh"}>
              <img src={item.image} alt={item.image} />
              <p className="legend">{item.category}</p>
            </Box>
          ))}
        </Carousel>
      ) : null}
      <AboutComponent />
      <CountsComponent />
      <Founder />
      <GalleryComponent />
      <Grid container spacing={3} px={10} mt="36px">
        <Grid item xs={12}>
          <Grid container spacing={4} px="6vw">
            <Grid item xs={12}>
              <Typography
                variant="h5"
                fontWeight={600}
                textTransform="uppercase"
                fontSize="24px">
                SEGMENTS
              </Typography>
            </Grid>
            {Array.isArray(categories)
              ? categories.map((item, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <StyledCard
                      onClick={() => {
                        navigate(
                          `/products?category=${item.category}&products=${item.name}`,
                        );
                      }}>
                      <img
                        src={item.image}
                        alt={item.category}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <CardOverlay>
                        <CategoryText>{item.category}</CategoryText>
                      </CardOverlay>
                    </StyledCard>
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
