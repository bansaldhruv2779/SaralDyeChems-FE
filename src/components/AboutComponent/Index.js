import React from "react";
import about from "../../assets/about.png";

const AboutComponent = ({lastParagraph}) => {
  return (
    <div className="p-20">
      <div
        style={{
          display: "flex",
          // padding: "0 5%",
          justifyContent: "center",
          flexDirection: "row",
          // alignItems: "center",
        }}>
        <div style={{width: "40%"}}>
          <img
            src={about}
            style={{
              width: "90%",
              height: lastParagraph ? "100%" : "60%", // Adjust height based on condition
              borderRadius: "10px",
            }}
            alt=""
            // style={{width: "90%", height: "60%", borderRadius: "10px"}}
          />
        </div>
        <div style={{width: "55%"}}>
          <div>
            <h2
              style={{
                fontSize: "20px",
                borderLeft: "2px solid #3C5D87",
                color: "#000029",
                fontWeight: "600",
                paddingLeft: "10px",
              }}>
              Leading Textile Chemilcals Distributor with over{" "}
              <span style={{color: "#5E7A9D"}}>36 years of Excellence</span>
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "13px",
                color: "#484949",
                marginBottom: "20px",
                marginTop: "20px",
              }}>
              Saral Dye Chems is a leading textile chemicals distributor
              business that was founded by Mr Vipul Kumar Gupta in 1987. With a
              passion for entrepreneurship, Mr Vipul started the company at the
              age of 21 and named it after his mother, symbolizing the love and
              dedication towards his family. Initially, the company traded
              engraving chemicals and soon became an authorized agent of
              Bluecoat Pvt Ltd.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#484949",
                marginBottom: "20px",
              }}>
              Within a few years, Saral had established a name for itself in the
              textile chemicals industry, which enabled Mr Vipul to purchase his
              own office in Tilak Bazaar - one of the biggest chemical trading
              markets in India. The company&apos;s growth was phenomenal, and
              soon Mr Sunit Kumar Gupta, Mr Vipul&apos;s younger brother, joined
              the business played a pivotal role in the company&apos;s success.
              His contribution helped to further expand the company&apos;s reach
              and take it to new heights.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#484949",
                marginBottom: "20px",
              }}>
              Today, Saral is a well-known name in the textile chemicals
              industry, with offices in Delhi, Panipat, and Ludhiana. Our
              offices cater to all the markets of Punjab, Haryana and even
              international markets like Nepal. Saral takes pride in offering a
              wide array of screen making materials, flat bed chemicals, rotary
              chemicals, and many more.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "#484949",
                marginBottom: "30px",
              }}>
              Our success is attributed to the dedication of our team, which
              works hard to ensure that we deliver quality products and services
              to our clients. With 36+ years of experience in the industry, we
              have built a strong reputation for our reliability,
              professionalism, and exceptional customer service.
            </p>
            {lastParagraph && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#484949",
                  marginBottom: "30px",
                }}>
                At Saral, we are committed to providing our clients with the
                best products, service, and experience. We strive to stay ahead
                of the curve by continuously innovating and expanding our range
                of products and services. We look forward to serving you and
                your business with our quality textile chemicals.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
