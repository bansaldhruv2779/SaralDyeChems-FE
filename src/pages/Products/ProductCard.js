import React from "react";

const ProductCard = ({allProducts}) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F5F7FB",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px 5%",
        justifyContent: allProducts.length === 1 ? "center" : "space-between",
      }}>
      {allProducts.map((product, index) => (
        <div
          key={index}
          className=" w-full sm:max-w-full md:max-w-[48%] lg:max-w-[48%]"
          style={{
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
              <img src={product.image} alt={product.name} />
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
