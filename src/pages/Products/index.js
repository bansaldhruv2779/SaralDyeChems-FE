import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProductList} from "../../store/actions";
import {Grid, Typography, Box, styled} from "@mui/material";
import productList from "./products.json";
import Brush from "../../constants/brush.png";
import Flip from "../../components/Flipword/Flip";
import {BackgroundBoxesDemo} from "../../components/Background/Background";
import FlipHeading from "../../components/Flipword/FlipHeading";
import ProductCard from "./ProductCard";
import FeaturesSectionDemo from "./ProductView";
import CommonBackground from "../../components/CommonBackground/Index";

const ProductSection = styled(Box)(({theme, direction}) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  alignItems: "flex-start",
  // marginBottom: theme.spacing(6),
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
}));

// Styled component for responsive product image
const ProductImage = styled("img")(({theme}) => ({
  width: "100%",
  maxWidth: "400px",
  height: "700px",
  maxHeight: "400px",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  margin: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    maxWidth: "300px",
    maxHeight: "300px",
  },
  [theme.breakpoints.down("xs")]: {
    maxWidth: "200px",
    maxHeight: "200px",
  },
}));

const ProductDetails = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const BackgroundSection = styled(Box)(({theme}) => ({
  position: "relative",
  // height: "400px",
  // backgroundImage: `url(${"https://img.freepik.com/free-vector/hand-draw-blue-brush-watercolor-texture_1035-19518.jpg?t=st=1722673840~exp=1722677440~hmac=67cbce25fce5139c4b5b4a7571862441fcae28aa78c11807880dd8fbf9d59df9&w=1480"})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)", // Paintbrush effect
  color: "#fff",
  display: "flex",
  alignItems: "center",
  // paddingLeft: theme.spacing(4),
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Light black overlay
    clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)", // Match the image clipping
    zIndex: 1,
  },

  // Ensures text is above the overlay
  zIndex: 2,
}));

const Products = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const ref = useRef(0);
  const params = new URL(document.location).searchParams;
  const categoryId = params.get("category");
  const categoryName = params.get("name");

  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const productsArray = [];

    productList.data.forEach(category => {
      if (!categoryId || category.category === categoryId) {
        category.product.forEach(product => {
          productsArray.push({
            category: category.category,
            name: product.name,
            description: product.description,
            image: product.image,
            subCategory: product.subCategory || [],
          });
        });
      }
    });

    setAllProducts(productsArray);
  }, [categoryName, categoryId]);

  useEffect(() => {
    if (ref.current === 0) {
      dispatch(fetchProductList.REQUEST({params: {categories: categoryId}}));
      ref.current = 1;
    }
  }, [dispatch, categoryId]);

  const renderProductSection = (products, direction) => {
    // Get unique categories from the products array
    const uniqueCategories = [
      ...new Set(products.map(product => product.category)),
    ];

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <ProductSection direction={direction}>
          <div style={{marginRight: "100px"}}>
            <ProductCard
              imgSource={
                products[0].image ||
                "https://lh3.googleusercontent.com/fife/ALs6j_ED1HIDrGiCaRLhwtnL0viVmgcJLsX8CfpQXvBNt5v3rVNizHRzhXpsA5kwYYugdAqJhqcOzChyoqPJK9V2BezwqxFh5ij0XCp4RnKm_BLiXpXTxfr809jocEzKiag87rqnn2-1PLXCy1s3EP-AXq8zYBRrJmOBzm5Ps5Unpz3Kjv2CGDjdoF8D7goh5vLjKNGupyr1Bp5Bau9p51OR1vUzQNK4K3mlmQyGiS5r7Vx8V-vznSSXydKSITJsBThPwTaKTNLkqoELy5On5HNYrKw-n0udkIdE9mjxyxXJk82HfA6mHDlC5W24i6Bz1ajtWiXWChaJyFGCse9YGVYpW9Slu0BA-XjWz2Kkca1KO7l7vcVuEGQyRpc0GXzCoTvdVM-kKU5UxD2K6CJotRXePb5eyuD0f7aCJP8k925AriwGrluA_ElT7HXn4NqUXI4mGN3gcArAkaVWWP4qFECfU4FJoWNYydBLMSrpQ6tIcS3FjpVsGslmF3ryDyHcqruLx1lRo2YmGj00KPxCzHTBNgMA4IzfrVeqxjnxqBDqP-wnb4FY92Suy7rXpZE8d2hum3bP89jVIEtZWXPPQApKcMn5r7MY8CA8IQqVe55KDjlvETWNaKmOhI4EV5iGHsYOxLkBW6XEuCNpQaa-e5xmCT7JIXS_NEu9tx-8zyg0dfbWuukAxl1JM2oWQso16zQCE9WRW6ftikVcCjpsL14Vf9nmXnr0PAfBw732CLWx7ImzRYF2xONjstustv-7fxTEUoEBXzgRtLfUo7TGfB6PBDhscY7_ZN_zkYZU4Hcdlhy2Va_4WrJ-84e_Dq6to_MgO3GLbjbQbiicsvNXD6tucAdn1D76HvtUg_kEsaWIsUtrF75X9x29686_sN5JYLpen0RP6uXlmRofxT24uZRixOdKtFcyKzmf3Mzh5677JiZffyphRTPIJNkuNpaP4Z4HTyXi8GC7YTOwRn2GO43I2eM8cUCogiWz7a75NVEJVjg-2Nj2ZJdmGEoi0p8QKIvgz2tDbLAHliQIexHIeWGr3Ryk1Qhz9Xm-HAl2XTwufLgCttWGMaE9dbJqF-oVKaNAEt8KJvfcrS2DF5hUzyvDPyGshfz1Q73Z_pBfOpTJ76-YeHXdVVvAvXtlNqMklGF01KceGhs0wsZmB53lAvydncimxowL4L7UXVyR5HgtCe5MO14Dv4Upor-i9uGxixb9tXp29fhm7NYoJ6mI7YzFK31LmN4NEnatV3oyCoYkeL8gKYjgi_BVBz_Flgn18DrtzGNv2S5caJ8-V5m3I0OxJxS554mzuKxXOWPRHxXVE61HY8fNeUsoKd4xZr-3cyaktQgiwZWQmxHE3TmIQES-O9tJ0U4Jv47iueMuTr1qwWT5Qp2HeS0WN6PzqPnjZEpasiiaxApJuRijjnWABtYO27qPlH2rJJF39grivxN1q2O3j5IsC4kYow-BcwndzeJYWgn3ISlMw42lhYq9PdYSFAvU1IM7LGRTP-3_ACJH4A2CKZeoCwBk7GMySC2wYUu5ZmEJspST41yYL3Sp6c5MLAADarDYJYBHbOLmeMgLIh3pxgBufckw09g3UKWgH5Vsekn8IhJTXOMdD8X8=w2880-h1448"
              }
            />
          </div>
          <div>
            <FeaturesSectionDemo features={products} />
          </div>
        </ProductSection>
      </div>
    );
  };

  return (
    <div>
      <CommonBackground
        title={categoryId}
        mainRoute=""
        childRoute=""
        description="Flat bed screen printing chemicals are specialized dyes and agents used for precise, high-quality textile printing on flat surfaces."
      />
      <ProductCard />
    </div>
  );
};

export default Products;
