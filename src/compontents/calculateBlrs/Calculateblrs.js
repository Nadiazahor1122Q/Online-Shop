import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default () => {
  return (
    <div>
      <Box
        style={{
          padding: "50px 0px 80px 20px",
          maxWidth: "1440px",
          margin: "auto",
          color: "white",
          textAlign: "center",
          background: "#282454",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: "80px 0px", textAlign: "left" }}
          >
            <Typography
              variant="h4"
              mt={3}
              style={{ fontWeight: "bold", color: "white" }}
            >
              Stake BLRS for 30 Days
            </Typography>
            <Typography paragraph mt={5} style={{ maxWidth: "100%" }}>
              Start staking BLRS and receive 50% of earnings in BNBull after 30
              days and the remaining 50% of BNBull after the next 30 days.
            </Typography>

            <a
              href="#swapid"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                style={{
                  background: "#FF4365",
                  color: "white",
                  marginTop: "40px",
                  width: "40%",
                  padding: "2% 5%",
                  borderRadius: "50px",
                  fontWeight: 700,
                }}
              >
                Activate Your Stake
              </Button>
            </a>
          </Grid>
          <Grid justifyContent="space-between" item xs={12} md={6}>
            <Container style={{ maxWidth: "80%" }}>
              <img
                style={{
                  width: "50%",
                  maxHeight: "100vh",
                  transform: "rotate(-10deg)",
                }}
                src="./img/phone-home.png"
              />
              <img
                style={{
                  width: "50%",
                  maxHeight: "100vh",
                  transform: "rotate(10deg)",
                }}
                src="./img/phone-payment.png"
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
