import { Button, Container, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Header from "../header/Header";
import "./general.css";
 import Image from "./banner.cbd54657.jpg";
// import Background from "./background.png";
// import banner from "./banner.jpg";
import Buy from "./buy.0c625bec.png";

export default () => {
  const init = async () => {
    const wasAdded = await window.ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: "0x72aac17A5bbda9672d80c1869E7B1C8f34541BD2", // The address that the token is at.
          symbol: "BNBULL", // A ticker symbol or shorthand, up to 5 chars.
          decimals: 10, // The number of decimals in the token
          image: "https://bullrock.vip/bnbbull.png",
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  };
  return (
    <>
      <Box
        id="buyid"
        style={{
          background: `url(${Image})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "840px",
          marginTop: "-20vh",
        }}
      >
        <Container>
          <Grid container pt={35}>
            <Grid
              item
              container
              xs={12}
              sm={12}
              md={8}
              lg={8}
              pr={{ xs: "2", sm: "5" }}
            >
              <Typography
                variant="h2"
                fontSize={{ xs: "40px" }}
                style={{ fontWeight: "600",color: '#fff' }}
              >
                Meet the BULLROCK SWAP Ecosystem Token!
              </Typography>
              <Typography
                width={{ xs: "100%", md: "100%" }}
                paragraph
                mt={2}
               
                fontSize={{ xs: "20px" }}
                style={{ textAlign: "justify",color: '#fff'  }}
              >
                The best community token in the world... A deflationary project
                with an ecosystem with a solid and unique exchange on the
                Blockchains of BSC, ETH, KCC, POLYGON, CARDANO and SOLANA. Very
                soon, you’ll exchange your tokens with a simple click.
              </Typography>
              <Grid item container justifyContent="space-around">
                <Grid item xs={12} sm={12} md={3} lg={3} mt={1}>
                  <a
                    href="https://www.xt.com/"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      style={{
                        padding: "2% 45px",
                        borderRadius: "41px",
                        background: "#FF4365",
                        color: "white",
                      }}
                    >
                      BUY BLRS
                    </Button>
                  </a>
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} mt={1}>
                  <a
                    href="https://www.bakeryswap.org/#/swap"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <Button
                      style={{
                        padding: "2% 40px",
                        borderRadius: "41px",
                        background: "#FF4365",
                        color: "white",
                      }}
                    >
                      BUY BNBULL
                    </Button>
                  </a>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} mt={1} mb={10}>
                  <Button
                    style={{
                      padding: "2% 3%",
                      borderRadius: "41px",
                      color: "#FF4365",
                    }}
                  >
                    CLAIM BNBULL AIRDROPS {">"}
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box style={{ width: "90%", margin: "auto" }}>
                <img src={Buy} alt={Buy} width="100%" />
              </Box>
            </Grid>
          </Grid>

          <Grid container justifyContent="space-between" textAlign="center">
            <Grid mt={5} item xs={12} sm={12} md={4}>
              <Typography variant="h6" style={{ wordWrap: "break-word",color: '#fff' }}>
                <span style={{ color: "#FF4365", fontWeight: 700 }}>
                  TOKEN ADDRESS (BLRS):
                </span>{" "}
                <br />
                0xF915E8306028a0F99A548f31317b056A52cfbaC1
              </Typography>
            </Grid>
            <Hidden mdDown>
              <Grid
                className="stage"
                mt={5}
                item
                xs={12}
                md={4}
                style={{ height: "100px" }}
              >
                {/* <Box  style={{background:"white",width:"10px",height:"10px",margin:"auto",}}>

              </Box > */}

                <svg
                  className="box bounce-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.144"
                  height="34.286"
                  viewBox="0 0 24.144 34.286"
                >
                  <defs>
                    <linearGradient
                      id="scroll-down-gradient"
                      x1="0.5"
                      x2="0.5"
                      y2="1"
                      gradientUnits="objectBoundingBox"
                    >
                      <stop
                        offset="0"
                        stopColor="#fff"
                        stopOpacity="0.62"
                      ></stop>
                      <stop
                        offset="1"
                        stopColor="#ff4365"
                        stopOpacity="0.8"
                      ></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#scroll-down-gradient)"
                    d="M87.8 0a12.182 12.182 0 00-12.074 12.261v9.764a12.073 12.073 0 1024.144.037v-9.8A12.182 12.182 0 0087.8 0zm9.8 22.063a9.8 9.8 0 11-19.6-.038v-9.764a9.8 9.8 0 1119.6 0z"
                    transform="translate(-75.726)"
                  ></path>
                  <path
                    fill="url(#scroll-down-gradient)"
                    d="M240.181 140.15a1.135 1.135 0 00-1.135 1.135v3.974a1.135 1.135 0 002.271 0v-3.974a1.135 1.135 0 00-1.136-1.135z"
                    transform="translate(10.937 9.385) translate(-239.046 -140.15)"
                  ></path>
                </svg>

                <Box
                  style={{
                    background: "#391B2F",
                    width: "3px",
                    height: "80px",
                    margin: "auto",
                    marginTop: "5px",
                  }}
                ></Box>
              </Grid>
            </Hidden>

            <Grid mt={5} item xs={12} sm={12} md={4}>
              <Typography variant="h6" style={{ wordWrap: "break-word" ,color: '#fff' }}>
                <span style={{ color: "#FF4365", fontWeight: 700 }}>
                  TOKEN ADDRESS (BNBULL):
                </span>{" "}
                <br />
                0x72aac17A5bbda9672d80c1869E7B1C8f34541BD2
              </Typography>
              <Button
                style={{
                  padding: "2% 40px",
                  borderRadius: "41px",
                  background: "#FF4365",
                  color: "white",
                }}
                onClick={init}
              >
                ADD BNBULL TO METAMASK
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
