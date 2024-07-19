import React, {useEffect, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../store/actions";
import {Grid, Stack, Typography} from "@mui/material";
import {get} from "lodash";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Products = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const ref = useRef(0);
  const params = new URL(document.location).searchParams;
  const categoryId = params.get("category");
  const categoryName = params.get("name");

  useEffect(() => {
    if (ref.current === 0) {
      dispatch(fetchProductList.REQUEST({params: {categories: categoryId}}));
      ref.current = 1;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid container spacing={6} p={10} style={{backgroundColor: "white"}}>
      <Grid item xs={12} textAlign={"center"}>
        <Typography variant="h4" fontWeight={700}>
          {categoryName ?? "All Products"}
        </Typography>
      </Grid>
      <Grid item xs={12} mt={4}>
        <Grid container spacing={3} px={"10vw"}>
          {Array.isArray(products) &&
            products.map((product, index) => {
              return (
                <Grid item xs={8} key={get(product, "_id", index)} mt={"16px"}>
                  <Typography
                    variant="h5"
                    fontSize={"18px"}
                    fontWeight={600}
                    display="inline">
                    {get(product, "name", "")}
                    <Typography
                      variant="subtitle1"
                      fontSize={"16px"}
                      display="inline"
                      ml="6px">
                      {get(product, "description", "")}
                    </Typography>
                  </Typography>
                  <Grid container spacing={5}>
                    {Array.isArray(get(product, "subCategory", [])) &&
                      get(product, "subCategory", []).map(
                        (subCategory, childIdx) => {
                          return (
                            <Grid
                              item
                              xs={6}
                              md={4}
                              mt={"8px"}
                              key={get(subCategory, "_id", childIdx)}>
                              <Stack direction={"row"} alignItems="center">
                                <CheckCircleIcon color="secondary" />
                                <Typography
                                  variant="subtitle2"
                                  fontWeight={500}
                                  ml={1}>
                                  {get(subCategory, "name", "")}
                                </Typography>
                              </Stack>
                            </Grid>
                          );
                        },
                      )}
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Products;
