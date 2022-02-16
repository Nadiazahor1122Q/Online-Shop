import { Button, Container, Grid, Typography, Box } from "@mui/material";
// import "./footer.css";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default () => {
  return (
    <div>
      <Box
        style={{
          padding: "100px 0px 0px 0px",
          maxWidth: "1400px",
          margin: "90px auto 0px auto",
          color: "white",
          background: "#282454",
        }}
      >
        <Container
          style={{
            width: "100%",
            maxWidth: "1000px",
            background: "#FFFFFF",
            border: "1px solid white",
            borderRadius: "12px",
            padding: "20px",
            marginTop: "-190px",
            color: "#282454",
          }}
        >
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" style={{ marginTop: "20px" }}>
                <b>Join Telegram to keep yourself updated!</b>
              </Typography>
              <Typography
                paragraph
                style={{ marginTop: "20px" }}
                textAlign="center"
              >
                You are one click away
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <a
                href="https://bit.ly/bullrockswapenglishchannel"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <Button
                  style={{
                    background: "#FF4365",
                    padding: "4% 20%",
                    borderRadius: "26px",
                    color: "white",
                    marginTop: "35px",
                    fontWeight: 700,
                  }}
                >
                  JOIN TELEGRAM
                </Button>
              </a>
            </Grid>
          </Grid>
        </Container>

        <Box>
          <Grid container style={{ maxWidth: "1250px", margin: "auto" }}>
            <Grid
              item
              xs={12}
              md={8}
              style={{ background: "#282454", padding: "40px 0px" }}
            >
              <img src="./img/bull_footer.png" />
            </Grid>
            <Grid
              container
              item
              xs={12}
              md={4}
              style={{
                background: "#282454",
                padding: "40px 0px",
                textAlign: "center",
              }}
            >
              <Grid xs={12} md={6} item style={{ background: "#282454" }}>
                <Typography paragraph>E-Mail: support@bullrock.vip</Typography>
              </Grid>
              <Grid xs={12} md={6} item style={{ background: "#282454" }}>
                <Typography paragraph>Discover Our App</Typography>

                <img src="./img/googleplay.png" />
                <img src="./img/appleplay.png" />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Box
          mt={3}
          style={{
            maxWidth: "1250px",
            margin: "auto",
            borderTop: "1px solid #58557B",
            borderBottom: "1px solid #58557B",
            padding: "15px 10px",
          }}
        >
          <Grid container>
            <Grid
              style={{ marginTop: "8px" }}
              container
              item
              md={6}
              justifyContent="space-around"
            >
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  fontSize={{ xs: "40px" }}
                  href="#buyid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Buy
                </a>{" "}
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#claimid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Claim
                </a>
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#swapid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Swap
                </a>
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#cardid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Card
                </a>
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#payid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Pay
                </a>
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#roadmapid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Roadmap
                </a>
              </Grid>
              <Grid
                sx={{
                  "&:hover": {
                    borderBottom: "1px solid #F11775",
                  },
                }}
                item
                style={{ color: "white" }}
              >
                <a
                  href="#communityid"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Community
                </a>
              </Grid>
            </Grid>
            <Grid style={{ margin: "auto" }} textAlign="right" item md={6}>
              <a href="https://bit.ly/redditbulrrockswap" target="_blank">
                {" "}
                <i
                  style={{
                    color: "#FF4365",
                    background: "white",
                    borderRadius: "30px",
                    padding: "6px",
                    fontSize: "30px",
                    marginLeft: "15px",
                  }}
                  class="fa fa-reddit-alien"
                ></i>
              </a>
              <a href="https://bit.ly/facebookbullrockswap" target="_blank">
                <i
                  style={{
                    color: "#FF4365",
                    background: "white",
                    borderRadius: "30px",
                    padding: "6px 12px",
                    fontSize: "30px",
                    marginLeft: "15px",
                  }}
                  class="fa fa-facebook-f"
                ></i>
              </a>
              <a href="https://bit.ly/twitterbullrockswap" target="_blank">
                <i
                  style={{
                    color: "#FF4365",
                    background: "white",
                    borderRadius: "30px",
                    padding: "6px",
                    fontSize: "30px",
                    marginLeft: "15px",
                  }}
                  class="fa fa-twitter"
            aria-hidden="true"  ></i>
              </a>

              <a href="https://bit.ly/youtubebullrockswap" target="_blank">
        
                <i
                  style={{
                    color: "#FF4365",
                    background: "white",
                    borderRadius: "30px",
                    padding: "6px",
                    fontSize: "30px",
                    marginLeft: "15px",
                  }}
                  class="fa fa-youtube-play"
            aria-hidden="true"    ></i>
              </a>
              <a
                href="https://bit.ly/bullrockswapenglishchannel"
                target="_blank"
              >
               
                <i
                  style={{
                    color: "#FF4365",
                    background: "white",
                    borderRadius: "30px",
                    padding: "8px 10px",
                    fontSize: "30px",
                    marginLeft: "15px",
                  }}
                  class="fa fa-telegram"
           aria-hidden="true"></i>
              </a>
            </Grid>
          </Grid>
        </Box>
        <Box style={{ textAlign: "center" }}>
          <Typography
            paragraph
            style={{
              margin: "0px",
              padding: "10px 0px",
              fontSize: "20px",
              color: "white",
            }}
          >
            © 2021 BNBull. All Rights Reserved
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
