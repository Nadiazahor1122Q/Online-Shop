import { Button, Container, Grid, Typography, Box } from "@mui/material";
export default () => {
  return (
    <div>
      <Box
        style={{
          padding: "50px 0px 80px 20px",
          maxWidth: "1400px",
          margin: "auto",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box
          fontSize={{ xs: "20px", md: "14px" }}
          style={{ color: "#8883BB", paddingBottom: "30px" }}
        >
          Partnership Companies:
        </Box>

        <marquee scrollamount="20">
          <img style={{ marginRight: "30px" }} src="./img/companies/1.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/2.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/3.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/4.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/5.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/6.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/7.svg" />
          <img style={{ marginRight: "30px" }} src="./img/companies/8.svg" />
        </marquee>
      </Box>
    </div>
  );
};