import { Container } from "@material-ui/core";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import "./roadMap.css";

export default () => {
  const timeOne = [
    "BSC coin design",
    "Presale Governance Token",
    "Website design V1",
    "Launch marketing campaigns",
    "Official launch on PancakeSwap",
    "Contract verification",
    "Launching",
    "Expand marketing efforts",
    "Percentage of tokens burned 15%",

    "Launch of Crypto Card",
    "Launch of payment Gateway",
    "for individuals and companies",
  ];

  const timeTwo = [
    "Successful completion of the audit",

    "Launch of merchandise",
    "V1 Website design",
    "Giveaways and contests to participate",

    "Listing in 2 Exchanges",

    "BNBull Launch – Retribution Token",

    "Launch of BLRS Staking System",
  ];

  const timeThree = [
    "50% Tokens Burned",

    "Design Version V2 Website",

    "CEX for BLRS: Coinsbit.io and xt.com. BNBull in backeryswap.org",

    "BLRS and BNBull in CoinMarketCap and CoinGecko",

    "Launch of our multichain ETH, POLYGON NETWORK, KCC, Solana and Cardano",

    "Implementation of Farming and Staking in our own Exchange",

    "By Q1 2022, we will have the strategic partnership for our NFT Videogame creation for the launch of our NFT Game in late 2021 early Q1 2022 ",
  ];

  return (
    <>
      <Box
        id="roadmapid"
        style={{
          textAlign: "center",
          background: "#131128",
          maxWidth: "1440px",
          margin: "auto",
        }}
        pt={15}
        pb={15}
      >
        <Typography fontSize={{ xs: "34px" }} variant="h2" mb={5} color="#fff">
          Road Map
        </Typography>
        <Typography
          paragraph
          width={{ xs: "90%", md: "40%" }}
          style={{ margin: "auto", color:"#fff"  }}
        >
          This is just the beginning. Get ready for everything our team has for
          you. BullRock Swap, the force of innovation.
        </Typography>

        <Box mt={20}>
          <Container maxWidth="md">
            <div className="container bootdey">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      {/* Timeline start */}
                      <div className="timeline">
                        {/* ignor this block START */}
                        <div
                          className="timeline-row"
                          style={{ display: "none" }}
                        >
                          <div className="timeline-time">Q2 - 2021</div>
                          <div className="timeline-dot green-one-bg" />
                          <div className="timeline-content green-one"></div>
                        </div>

                        {/* ignor ends */}

                        <div className="timeline-row">
                          <div
                            className="timeline-time"
                            style={{ color: "white" }}
                          >
                            Q2 - 2021
                          </div>
                          <div className="timeline-dot green-two-bg" />
                          <div className="timeline-content green-two">
                            <ul className="liststyle">
                              {timeOne.map((text) => (
                                <li
                                  style={{ margin: "5px 0px", padding: "0" }}
                                  className="liststyle"
                                >
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div
                            className="timeline-time"
                            style={{ color: "white" }}
                          >
                            Q3 - 2021
                          </div>

                          <div className="timeline-content green-three">
                            <ul style={{ textAlign: "left" }}>
                              {timeTwo.map((text) => (
                                <li
                                  style={{ margin: "5px 0px", padding: "0" }}
                                  className="liststyle"
                                >
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="timeline-row">
                          <div
                            className="timeline-time"
                            style={{ color: "white" }}
                          >
                            Q4 - 2021
                          </div>

                          <div
                            id="circle4"
                            className="timeline-content  green-four"
                          >
                            <ul style={{ textAlign: "left" }}>
                              {timeThree.map((text, index) => (
                                <li
                                  style={{ margin: "10px 0px", padding: "0" }}
                                  className={
                                    index < 3 ? "liststyle" : "liststylered"
                                  }
                                >
                                  {text}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Timeline end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Box>

        <a
          href="./bull.pdf"
          download
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          <Button
            type="submit"
            style={{
              padding: "0.2% 8%",
              marginTop: "40px",
              background: "#FF4365",
              color: "white",
              borderRadius: "40px",
              fontSize: "16px",
              fontWeight: 700,
            }}
          >
            DOWNLOAD WHITEPAPER{" "}
          </Button>
        </a>
      </Box>
    </>
  );
};
