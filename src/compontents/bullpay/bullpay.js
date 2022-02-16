import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
export default () => {
  return (
    <div>
      <Box
        id="payid"
        style={{
          padding: '50px 0px 80px 20px',
          maxWidth: '1400px',
          margin: 'auto',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            style={{ padding: '80px 0px', textAlign: 'left' }}
          >
            <Typography
              fontSize={{ xs: '30px', sm: '46px' }}
              fontWeight={700}
              variant="h2"
              mt={2}
            >
              BULLROCK <span style={{ color: '#FF4365' }}>PAY</span>
            </Typography>
            <Typography width={{xs:"90%",md:"100%"}} paragraph mt={5} style={{ textAlign:"justify", color:'#fff' }}>
              First Bitcoin Payment Platform. Access a perfect payment gateway
              for sales of your products, services, investments, donations,
              streaming, youtubers, etc. Promote your business in Spanish,
              English, Russian and Chinese.Generate vouchers without the need to
              link a card or bank account.Your customers can pay with
              cryptocurrencies from any wallet.
            </Typography>
            <a
              href="https://community.bullrock.vip/pay/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
              width={{xs:"80%",md:"40%"}}
                style={{
                  background: '#FF4365',
                  color: 'white',
                  marginTop: '40px',
                  borderRadius: '40px',
                  padding: '2% 3%',
                  fontWeight: 700,
                }}
              >
                GO TO BULLROCK PAY
              </Button>
            </a>
          </Grid>
          <Grid item xs={12} md={6}>
            <Container style={{ maxWidth: '80%' }}>
              <img
                style={{
                  width: '50%',
                  maxHeight: '100vh',
                  transform: 'rotate(-20deg)',
                }}
                src="./img/phone-payment.png"
              />
              <img
                style={{
                  width: '50%',
                  maxHeight: '100vh',
                  transform: 'rotate(20deg)',
                }}
                src="./img/phone-home.png"
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
