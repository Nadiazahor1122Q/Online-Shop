import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import Video from './video.PNG';
import Leftimg from './leftimg.PNG';
import Rightimg from './rightimg.PNG';
import posterimg from './player.png';
import proxima from './proxima.e96a26c5.jpg';
import { Container } from '@material-ui/core';

export default () => {
  return (
    <>
      <Container
        style={{
          paddingBottom: '10px',
        }}
        maxWidth="lg"
      >
        <Grid container alignItems="center">
          <Grid item xs={12} sm={12} md={6} lg={6} mb={20} mt={20}>
            <Typography variant="h3" fontWeight="bold" textAlign="left" color="#fff">
              Get started today
            </Typography>

            <Typography
              paragraph
              style={{ marginTop: '6vh',color:'#fff' }}
              fontWeight="bold"
              textAlign="left"
            >
              The first and only worldwide multi-chain exchanger. You can buy in
              BSC, POLYGON NETWORK, ETH and KCC...All in one place.
            </Typography>
          </Grid>
          <Grid justifyContent="center" item xs={12} sm={12} md={6} lg={6}>
            <iframe
              src="https://player.vimeo.com/video/612821951?h=e716f4d5a3"
              width="90%"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style={{
                borderRadius: '50px',
                border: '2px solid #FF4365',
                padding: '0px',
                margin: 'auto',
                minHeight: '360px',
              }}
            ></iframe>
          </Grid>
        </Grid>
      </Container>

      <Grid container mt={0}>
        <img style={{ width: '100%', height: 'auto' }} src={proxima} />
      </Grid>
    </>
  );
};
