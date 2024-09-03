import React, {useEffect, useState} from "react";
import image2 from "../../assets/photo.png";
import background from "../../assets/prbgb.png";
import productList from "./newProduct.json";

const ProductCard = () => {
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

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F5F7FB",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px 5%",
        justifyContent: "space-between",
      }}>
      {allProducts.map((product, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            maxWidth: "48%",
            borderRadius: "10px",
            margin: "10px 0",
            backgroundColor: "#FFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            boxSizing: "border-box",
            flex: "1 1 calc(50% - 20px)", // Adjusts width on smaller screens
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3%",
            }}>
            <div
              style={{
                width: "200%",
                maxWidth: "300px",
                height: "320px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                zIndex: 1,
              }}>
              <img
                src={image2}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  zIndex: -1,
                  ...(index % 2 === 0
                    ? {left: -30, bottom: 30} // For odd-indexed items
                    : {top: 30, right: -30}), // For even-indexed items
                }}>
                <img
                  src={background}
                  style={{
                    width: "180px",
                    height: "180px",
                    borderRadius: "50%",
                  }}
                  alt="Background"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              padding: "10px",
            }}>
            <p
              style={{
                color: "#3C5D86",
                fontWeight: "800",
                fontSize: "22px",
              }}>
              {product.name}
            </p>
            <p style={{color: "#737879"}}>{product.description}</p>

            {product.subCategory.length > 0 && (
              <div
                style={{
                  padding: "5px 5px",
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "5px",
                }}>
                {product.subCategory.map((subCat, subIndex) => (
                  <div
                    key={subIndex}
                    style={{
                      gridColumn: subIndex % 2 === 0 ? "1 / 2" : "2 / 3",
                      marginTop: "10px",
                    }}>
                    <p style={{color: "#000029"}}>{subCat.name}</p>
                    {subCat.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        style={{
                          color: "#737879",
                          marginLeft: "10px",
                        }}>
                        {item}
                      </li>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
