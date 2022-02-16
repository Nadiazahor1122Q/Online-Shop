import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import worldleft from "./community.1375a8c3.png";
import { Container } from "@material-ui/core";

export default () => {
  return (
    <div>
      <Container
        id="communityid"
        style={{
          background: "#131128",
        }}
        maxWidth="lg"
      >
        <Grid container alignItems="center">
          <Grid xs={12} md={6} item style={{}}>
            <img width="100%" src={worldleft} />
          </Grid>
          <Grid
            xs={12}
            md={6}
            item
            textAlign="left"
            style={{
              color: "#fff",
              fontWeight: "bolder",
              padding: "120px 0px",
            }}
          >
            <Box>
              <Typography variant="h2" fontWeight={700}>
                Global community
              </Typography>
              <Typography
                paragraph
                textAlign="left"
                mt={2}
                style={{ width: "80%" }}
                fontWeight={600}
              >
                We are an international community interested in the exciting
                Blockchain world and its ways of generating high income. Be part
                of the BullRock Swap ecosystem!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};
