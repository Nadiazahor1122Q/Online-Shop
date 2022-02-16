import { Button, Container, Grid, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1180, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default (props) => {
  return (
    <div>
      <Box
        style={{
          padding: "50px 0px",
          maxWidth: "1400px",
          margin: "auto",
          color: "white",
        }}
      >
        {/* <Grid container> */}
          {/* <Grid item md={6}> */}
            <Typography
              variant="h4"
              textAlign={{ xs: "center", md: "left" }}
              fontWeight={900}
            >
              FEATURES
            </Typography>
            <Typography
              paragraph
              style={{
                marginTop: "20px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              width={{ xs: "80%", md: "100%" }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Main features you should know about BLRS and BNBULL
            </Typography>
          {/* </Grid> */}
          {/* <Grid item md={6} style={{ paddingTop: '60px' }}>
            <Box style={{ textAlign: 'right' }}>
              <i
                style={{ color: '#FF4365', fontSize: '40px' }}
                class="fas fa-arrow-alt-circle-left"
              ></i>
              <i
                style={{
                  color: '#FF4365',
                  fontSize: '40px',
                  marginLeft: '8px',
                }}
                class="fas fa-arrow-alt-circle-right"
              ></i>
            </Box>
          </Grid> */}
        {/* </Grid> */}

        {/* <Grid container justifyContent="space-between" mt={4}> */}
          <Carousel
            swipeable={true}
            arrows={false}
            renderButtonGroupOutside={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            transitionDuration={2000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            className="carusal"
          >
            {/* Grid 1 starts Here */}
            <div
              mt={4}
              textAlign="center"
              style={{
                maxWidth: "320px",
                minHeight: "250px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">
                SCALABLE AUTOMATED <br />
                LIQUIDITY POOLS
              </Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                Available your BLRS in COINSBITS and XT.COM and Bnbull available
                in Backeryswap. 7% Slippage tolerance.
              </Typography>
            </div>

            <div
              mt={4}
              textAlign="center"
              style={{
                minHeight: "250px",
                maxWidth: "320px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">TIMELOCKED</Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                The intellectual ownership of the contract has been given up, so
                every investment is totally safe.
              </Typography>
            </div>

            <div
              mt={4}
              textAlign="center"
              style={{
                minHeight: "250px",
                maxWidth: "320px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">Auto Yield-Farming</Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                You have the possibility to enjoy 3% rewards and interest by
                having your BLRS & BNBULL tokens.
              </Typography>
            </div>

            <div
              mt={4}
              textAlign="center"
              style={{
                minHeight: "250px",
                maxWidth: "320px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">Deflationary</Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                Large participation in our multi-chain, so its values will have
                a strong value increasing.
              </Typography>
            </div>

            <div
              mt={4}
              textAlign="center"
              style={{
                minHeight: "250px",
                maxWidth: "320px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">
                SCALABLE AUTOMATED <br />
                LIQUIDITY POOLS
              </Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                Available your BLRS in COINSBITS and XT.COM and Bnbull available
                in Backeryswap. 7% Slippage tolerance.
              </Typography>
            </div>

            <div
              mt={4}
              textAlign="center"
              style={{
                minHeight: "250px",
                maxWidth: "320px",
                background: "#201D42",
                padding: "30px",
                borderRadius: "20px",
                margin: "auto",
              }}
            >
              <img
                src="./img/2.svg"
                style={{ width: "80px", height: "80px" }}
              />

              <Typography variant="h6">
                SCALABLE AUTOMATED <br />
                LIQUIDITY POOLS
              </Typography>
              <Typography paragraph style={{ margin: "10px 0px" }}>
                Available your BLRS in COINSBITS and XT.COM and Bnbull available
                in Backeryswap. 7% Slippage tolerance.
              </Typography>
            </div>
          </Carousel>
        {/* </Grid> */}
      </Box>
    </div>
  );
};
