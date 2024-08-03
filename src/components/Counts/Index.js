// import {Box, Grid, Typography, styled} from "@mui/material";
// import React, {useEffect, useState} from "react";
// import CategoryIcon from "@mui/icons-material/Category";
// import GroupIcon from "@mui/icons-material/Group";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

// const StyledBox = styled(Box)(({theme, isGreen}) => ({
//   backgroundColor: isGreen ? "#021961" : "white",
//   color: isGreen ? "white" : "black",
//   display: "flex",
//   // alignItems: "left",
//   flexDirection: "column",
//   // justifyContent: "center",
//   // height: "230px",
//   width: "250px",
//   // borderRadius: "50%",

//   // boxShadow: "10px 10px 10px lightblue",
//   // boxShadow: isGreen ? theme.shadows[5] : "none",
//   // border: isGreen ? "none" : `2px solid ${theme.palette.grey[300]}`, // Light border for non-green boxes
// }));
// const Index = () => {
//   const [products, setProducts] = useState(0);
//   const [clients, setClients] = useState(0);
//   const [strength, setStrength] = useState(0);

//   useEffect(() => {
//     countUp(setProducts, 400, 3000);
//     countUp(setClients, 1000, 3000);
//     countUp(setStrength, 20, 3000);
//   }, []);

//   const countUp = (setter, endValue, duration) => {
//     const increment = endValue / (duration / 100);
//     let currentValue = 0;

//     const timer = setInterval(() => {
//       currentValue += increment;
//       setter(Math.ceil(currentValue));

//       if (currentValue >= endValue) {
//         clearInterval(timer);
//         setter(endValue);
//       }
//     }, 100); // Update every 100ms
//   };
//   return (
//     <Box
//       sx={{
//         // padding: "20px 2%",
//         display: "flex",
//         margin: "60px 0",
//         justifyContent: "center",
//         width: "100%",
//       }}>
//       <Grid container justifyContent="center">
//         <Grid item xs={8} sm={4} container justifyContent="center">
//           <StyledBox>
//             <CategoryIcon
//               sx={{
//                 fontSize: 35,
//                 color: "#021961",
//                 padding: "13px",
//                 background: "white",
//                 transform: "rotate(7deg)",
//                 borderRadius: "4px",
//                 marginBottom: "20px",
//                 boxShadow: "2px 2px 16px 2px lightgrey",
//               }}
//             />
//             <Typography variant="h2" color="#021961" fontWeight="bold">
//               {products}+
//             </Typography>
//             <Typography fontSize="20px" fontWeight="500" color="#536493">
//               Products
//             </Typography>
//             <Typography
//               fontSize="12px"
//               color="#758694"
//               width="230px"
//               fontWeight="500">
//               Many desktop publishing packages and web page editors now use
//               Pinky as their default model text.
//             </Typography>
//           </StyledBox>
//         </Grid>
//         <Grid item xs={12} sm={4} container justifyContent="center">
//           <StyledBox>
//             <GroupIcon
//               sx={{
//                 fontSize: 35,
//                 color: "#021961",
//                 padding: "13px",
//                 background: "white",
//                 marginBottom: "20px",
//                 borderRadius: "4px",
//                 transform: "rotate(-7deg)",
//                 boxShadow: "2px 2px 16px 2px lightgrey",
//               }}
//             />
//             <Typography variant="h2" color="#021961" fontWeight="bold">
//               {clients}+
//             </Typography>
//             <Typography fontSize="20px" fontWeight="500" color="#536493">
//               Clients
//             </Typography>
//             <Typography
//               fontSize="12px"
//               width="230px"
//               color="#758694"
//               fontWeight="500">
//               Many desktop publishing packages and web page editors now use
//               Pinky as their default model text.
//             </Typography>
//           </StyledBox>
//         </Grid>
//         <Grid
//           item
//           xs={12}
//           // width="250px"
//           sm={4}
//           container
//           justifyContent="center">
//           <StyledBox>
//             <EmojiEventsIcon
//               sx={{
//                 fontSize: 35,
//                 color: "#021961",
//                 padding: "13px",
//                 marginBottom: "20px",
//                 background: "white",
//                 borderRadius: "4px",
//                 transform: "rotate(7deg)",

//                 boxShadow: "2px 2px 16px 2px lightgrey",
//               }}
//             />
//             <Typography variant="h2" color="#021961" fontWeight="bold">
//               {strength}+
//             </Typography>
//             <Typography fontSize="20px" fontWeight="500" color="#536493">
//               Company Strength
//             </Typography>
//             <Typography
//               fontSize="12px"
//               width="230px"
//               color="#758694"
//               fontWeight="500">
//               Many desktop publishing packages and web page editors now use
//               Pinky as their default model text.
//             </Typography>
//           </StyledBox>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Index;
import {Box, Grid, Typography, styled} from "@mui/material";
import React, {useEffect, useState} from "react";
import CategoryIcon from "@mui/icons-material/Category";
import GroupIcon from "@mui/icons-material/Group";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: "white",
  color: "black",
  display: "flex",
  flexDirection: "column",
  // alignItems: "center",
  // justifyContent: "center",
  // width: "250px",
  padding: "20px",
  borderRadius: "10px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },
}));

const Index = () => {
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);
  const [strength, setStrength] = useState(0);

  useEffect(() => {
    countUp(setProducts, 400, 3000);
    countUp(setClients, 1000, 3000);
    countUp(setStrength, 20, 3000);
  }, []);

  const countUp = (setter, endValue, duration) => {
    const increment = endValue / (duration / 100);
    let currentValue = 0;

    const timer = setInterval(() => {
      currentValue += increment;
      setter(Math.ceil(currentValue));

      if (currentValue >= endValue) {
        clearInterval(timer);
        setter(endValue);
      }
    }, 100); // Update every 100ms
  };

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#021961",
          marginBottom: "30px",
          margin: "20px 8%",
          textAlign: "center",
          position: "relative",
          display: "inline-block",
          borderBottom: "4px solid #021961",
        }}>
        Achievements
      </Typography>
      <Box
        sx={{
          display: "flex",
          margin: "60px 0",
          justifyContent: "center",
          width: "100%",
        }}>
        <Grid container justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <CategoryIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  transform: "rotate(7deg)",
                  borderRadius: "4px",
                  marginBottom: "20px",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {products}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Products
              </Typography>
              <Typography
                fontSize="12px"
                color="#758694"
                width="230px"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <GroupIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  background: "white",
                  marginBottom: "20px",
                  borderRadius: "4px",
                  transform: "rotate(-7deg)",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {clients}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Clients
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="center">
            <StyledBox>
              <EmojiEventsIcon
                sx={{
                  fontSize: 35,
                  color: "#021961",
                  padding: "13px",
                  marginBottom: "20px",
                  background: "white",
                  borderRadius: "4px",
                  transform: "rotate(7deg)",
                  boxShadow: "2px 2px 16px 2px lightgrey",
                }}
              />
              <Typography variant="h2" color="#021961" fontWeight="bold">
                {strength}+
              </Typography>
              <Typography fontSize="20px" fontWeight="500" color="#536493">
                Company Strength
              </Typography>
              <Typography
                fontSize="12px"
                width="230px"
                color="#758694"
                fontWeight="500">
                Many desktop publishing packages and web page editors now use
                Pinky as their default model text.
              </Typography>
            </StyledBox>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
