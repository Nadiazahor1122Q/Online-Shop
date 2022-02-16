import { Button, Container, Grid, Typography, Box } from "@mui/material";

export default () => {
  return (
    <div>
      <Box
        style={{
          padding: "50px 0px",
          maxWidth: "1400px",
          margin: "auto",
          color: "white",
          textAlign: "center",
          background: "#131128",
        }}
      >
        <Typography
          variant="h2"
          fontSize={{ xs: "34px" }}
          style={{ color: "#fff", fontWeight: "bold" }}
          mb={5}
        >
          More than a typical crypto wallet
        </Typography>
        <Typography
          paragraph
          width={{ xs: "80%", sm: "70%", md: "40%" }}
          textAlign={{ xs: "justify", md: "center" }}
          style={{ margin: "10px auto", fontWeight: "bold" }}
          mb={10}
        >
          The only Multiexchange in the world on 6 different blockchains. With a
          single click, you will be able to switch blockchains and get your
          favorite tokens. Welcome to BullRock Swap!
        </Typography>

        <Grid container>
          <Grid md={4} container item>
            <Grid
              textAlign="left"
              item
              md={12}
              style={{
                background: "#282454",
                padding: "30px",
                borderRadius: "20px",
                maxHeight: "300px",
              }}
            >
              <img src="/img/1.svg" style={{ width: "80px", height: "80px" }} />

              <Typography variant="h6" fontWeight="bold">
                SCALABLE AUTOMATED <br />
                LIQUIDITY POOLS
              </Typography>
              <Typography
                paragraph
                style={{ margin: "10px 0px" }}
                color="#A29EC7"
              >
                Find BLRS in COINSBIT and XT.COM. BNBull is available in
                Bakeryswap (slippage tolerance 7%).
              </Typography>
            </Grid>

            <Grid
              mb={3}
              mt={2}
              textAlign="left"
              item
              md={12}
              style={{
                width: "100%",
                background: "#282454",
                padding: "30px",
                borderRadius: "20px",
                maxHeight: "300px",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6" fontWeight="bold">
                BUILT FOR EXCHANGE CEX AND SWAP V2.1
              </Typography>
              <Typography
                paragraph
                style={{ margin: "20px 0px" }}
                color="#A29EC7"
              >
                Have you though in the future? That’s why we created this
                Ecosystem. Get your BLRS and BNBull in first level Exchanges.
                Let’s keep growing together!
              </Typography>
            </Grid>
          </Grid>
          <Grid
            md={4}
            container
            item
            style={{ background: "#121026" }}
            justifyContent="center"
          >
            <img
              style={{ width: "90%", marginBottom: "30px" }}
              src="/img/phone-home.png"
            />
          </Grid>
          <Grid md={4} container item>
            <Grid
              textAlign="left"
              item
              md={12}
              style={{
                background: "#282454",
                padding: "30px",
                borderRadius: "20px",
                maxHeight: "300px",
              }}
            >
              <img
                src="./img/3.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6" fontWeight="bold">
                VISION OF OUR FUTURE
              </Typography>
              <Typography
                paragraph
                color="#A29EC7"
                style={{ margin: "10px 0px" }}
              >
                With our scalable and custom innovation projects, you can just
                sit back and enjoy this journey of evolution.
              </Typography>
            </Grid>

            <Grid
              item
              md={12}
              mt={2}
              textAlign="left"
              style={{
                width: "100%",
                background: "#282454",
                padding: "30px",
                borderRadius: "20px",
                maxHeight: "300px",
              }}
            >
              <img
                src="./img/4.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6" fontWeight="bold">
                OUR PRODUCTS LOOKING TO THE FUTURE
              </Typography>
              <Typography
                paragraph
                color="#A29EC7"
                style={{ margin: "20px 0px" }}
              >
                The only multiexchange in the main blockchains, own cryptocard,
                own payment gateway and – Coming Soon – own NFT Game.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
