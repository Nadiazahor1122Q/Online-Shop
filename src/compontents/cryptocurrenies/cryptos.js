import { Button, Container, Grid, Typography, Box } from "@mui/material";
export default () => {
  return (
    <div>
      <Box
        style={{
          padding: "50px 0px 80px 20px",
          maxWidth: "1400px",
          margin: "50px auto",
          color: "white",
          textAlign: "center",
          borderTop: "2px solid #FF4365",
          borderBottom: "2px solid #FF4365",
          background: "#191634",
        }}
      >
        <marquee scrollamount="20">
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/1.svg"
          />
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/2.svg"
          />
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/3.svg"
          />
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/4.svg"
          />
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/5.svg"
          />
          <img
            style={{ marginRight: "40px" }}
            src="./img/cryptocurrencies/6.svg"
          />
        </marquee>
      </Box>
    </div>
  );
};
