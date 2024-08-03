// import React from "react";
// import {Box, Grid, Typography} from "@mui/material";
// import {keyframes} from "@emotion/react";

// const floating = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

// const Index = () => {
//   return (
//     <Box sx={{padding: "30px 8%"}}>
//       <Grid container spacing={4} sx={{alignItems: "center"}}>
//         <Grid
//           item
//           xs={12}
//           md={6}
//           sx={{
//             animation: `${floating} 3s ease-in-out infinite`,
//           }}>
//           <Box
//             component="img"
//             src="https://img.freepik.com/free-vector/body-language-concept-illustration_114360-19536.jpg?t=st=1722623057~exp=1722626657~hmac=91b926289b050a86daceabc113c6f088234eafe1a759ec2a8847d5248e39a6f2&w=1480"
//             alt="Textile Chemicals"
//             sx={{
//               width: "100%",
//               borderRadius: "15px",
//             }}
//           />
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: "24px",
//               fontWeight: "bold",
//               color: "#021961",
//               marginBottom: "15px",
//               position: "relative",
//               paddingBottom: "10px",
//               borderBottom: "3px solid #021961",
//               display: "inline-block",
//             }}>
//             Leading Textile Chemicals Distributor with Over 36 Years of
//             Excellence
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "16px",
//               lineHeight: "1.8",
//               color: "#555",
//               marginBottom: "15px",
//             }}>
//             Saral Dye Chems, founded by Mr. Vipul Kumar Gupta in 1987, is a
//             leading distributor of textile chemicals. Starting at 21, Mr. Vipul
//             named the company after his mother, symbolizing his dedication.
//             Initially trading engraving chemicals, Saral quickly grew, becoming
//             an authorized agent of Bluecoat Pvt Ltd. The company&apos;s success
//             enabled Mr. Vipul to establish an office in Tilak Bazaar, Delhi. His
//             brother, Mr. Sunit Kumar Gupta, later joined, further driving
//             expansion.
//           </Typography>
//           <Typography
//             sx={{
//               fontSize: "16px",
//               lineHeight: "1.8",
//               color: "#555",
//               marginBottom: "15px",
//             }}>
//             Today, Saral operates offices in Delhi, Panipat, and Ludhiana,
//             serving Punjab, Haryana, and international markets like Nepal. We
//             offer a wide range of screen-making materials, flatbed chemicals,
//             rotary chemicals, and more. With over 36 years of industry
//             experience, Saral is known for reliability, professionalism, and
//             exceptional customer service. We are dedicated to providing
//             top-quality products and continually innovating to meet our
//             clients&apos; needs.
//           </Typography>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default Index;
import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {keyframes} from "@emotion/react";

const floating = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const Index = () => {
  return (
    <Box sx={{padding: "30px 8%"}}>
      <Typography
        variant="h5"
        sx={{
          fontSize: "36px",
          fontWeight: "bold",
          color: "#021961",
          marginBottom: "30px",
          textAlign: "center",
          position: "relative",
          display: "inline-block",
          paddingBottom: "10px",
          borderBottom: "4px solid #021961",
        }}>
        About Us
      </Typography>
      <Grid container spacing={4} sx={{alignItems: "center"}}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            animation: `${floating} 3s ease-in-out infinite`,
          }}>
          <Box
            component="img"
            src="https://img.freepik.com/free-vector/body-language-concept-illustration_114360-19536.jpg?t=st=1722623057~exp=1722626657~hmac=91b926289b050a86daceabc113c6f088234eafe1a759ec2a8847d5248e39a6f2&w=1480"
            alt="Textile Chemicals"
            sx={{
              width: "100%",
              borderRadius: "15px",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#021961",
              marginBottom: "15px",
              position: "relative",
              paddingBottom: "10px",
              borderBottom: "3px solid #021961",
              display: "inline-block",
            }}>
            Leading Textile Chemicals Distributor with Over 36 Years of
            Excellence
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "15px",
            }}>
            Saral Dye Chems, founded by Mr. Vipul Kumar Gupta in 1987, is a
            leading distributor of textile chemicals. Starting at 21, Mr. Vipul
            named the company after his mother, symbolizing his dedication.
            Initially trading engraving chemicals, Saral quickly grew, becoming
            an authorized agent of Bluecoat Pvt Ltd. The company&apos;s success
            enabled Mr. Vipul to establish an office in Tilak Bazaar, Delhi. His
            brother, Mr. Sunit Kumar Gupta, later joined, further driving
            expansion.
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "15px",
            }}>
            Today, Saral operates offices in Delhi, Panipat, and Ludhiana,
            serving Punjab, Haryana, and international markets like Nepal. We
            offer a wide range of screen-making materials, flatbed chemicals,
            rotary chemicals, and more. With over 36 years of industry
            experience, Saral is known for reliability, professionalism, and
            exceptional customer service. We are dedicated to providing
            top-quality products and continually innovating to meet our
            clients&apos; needs.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Index;
