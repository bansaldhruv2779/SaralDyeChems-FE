import {Grid, IconButton, Typography} from "@mui/material";
import React from "react";
import founderImage from "../../assets/rTkJ7v-man-png-image.png";
import SocialMediaComponent from "./SocialMediaComponent";

const Founder = () => {
  return (
    <div style={{margin: "20px 8%"}}>
      <div style={{backgroundColor: "#7FA1C3", height: 300}}>
        <Typography
          style={{
            textAlign: "center",
            fontSize: 30,
            color: "#FFF",
            fontWeight: 600,
            paddingTop: 60,
          }}>
          OUR FOUNDERS
        </Typography>
        <Typography
          style={{color: "white", textAlign: "center", fontStyle: "italic"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "-8%",
          //   marginBottom: "100px",
          flexWrap: "wrap",
        }}>
        <div style={{width: 200, marginBottom: "20px"}}>
          <img
            width={200}
            height={200}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPwXsRxKfg_oLi4wosyiRBOt8I_2J4q1jimw&s"
            style={{borderRadius: "50%"}}
          />
          <Typography style={{textAlign: "center", fontWeight: "bold"}}>
            Vipul Kumar Gupta
          </Typography>
          <Typography style={{textAlign: "center"}}>Founder</Typography>
          <SocialMediaComponent />
        </div>
        <div style={{width: 200, marginBottom: "20px"}}>
          <img
            width={200}
            height={200}
            src="https://st3.depositphotos.com/3776273/32500/i/450/depositphotos_325005348-stock-photo-close-up-shot-serious-and.jpg"
            style={{borderRadius: "50%"}}
          />
          <Typography style={{textAlign: "center", fontWeight: "bold"}}>
            Sumit Kumar Gupta
          </Typography>

          <Typography style={{textAlign: "center"}}>Founder</Typography>
          <SocialMediaComponent />
        </div>
        <div style={{width: 200, marginBottom: "20px"}}>
          <img
            width={200}
            height={200}
            src="https://st3.depositphotos.com/3776273/32500/i/450/depositphotos_325005348-stock-photo-close-up-shot-serious-and.jpg"
            style={{borderRadius: "50%"}}
          />
          <Typography style={{textAlign: "center", fontWeight: "bold"}}>
            Sumit Kumar Gupta
          </Typography>
          <Typography style={{textAlign: "center"}}>Founder</Typography>
          <SocialMediaComponent />
        </div>
      </div>
    </div>
  );
};

export default Founder;
