import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryList} from "../../store/actions";
import {get} from "lodash";
import {Box, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from "react-responsive-carousel";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {categories} = useSelector(state => state.products);
  const ref = useRef(0);

  useEffect(() => {
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
          {categories.map((item, index) => {
            return (
              <Box key={get(item, "_id", index)} height={"50vh"}>
                <img src={get(item, "image", "")} alt={get(item, "name", "")} />
                <p className="legend">{get(item, "name", "")}</p>
              </Box>
            );
          })}
        </Carousel>
      ) : null}
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
                    <Box
                      height={"240px"}
                      width="100%"
                      sx={{
                        backgroundImage: `url(${get(item, "image", "")})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                      borderRadius="12px">
                      <Box
                        width="full"
                        height="240px"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          "&:hover": {
                            background: "rgba(0,0,0,0.9)",
                          },
                        }}
                        onClick={() => {
                          navigate(
                            `/products?category=${get(
                              item,
                              "_id",
                              "",
                            )}&name=${get(item, "name", "")}`,
                          );
                        }}
                        borderRadius="12px">
                        <Typography variant="h6" color="white">
                          {get(item, "name", "")}
                        </Typography>
                      </Box>
                    </Box>
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
