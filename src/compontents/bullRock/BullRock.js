import { useTheme } from '@emotion/react';
import {
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';

import Card from './tarjeta.818823e7.jpg';

export default () => {
  const { spacing } = useTheme();
  return (
    <>
      <Grid
        id="cardid"
        container
        alignItems="center"
        style={{ maxWidth: '1440px', margin: 'auto' }}
      >
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Box style={{ width: '70%', margin: 'auto' }}>
            <img src={Card} alt={Card} width="100%" />
          </Box>
        </Grid>
        {/* pl={{ xs: "30px", md: "10px" }} */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          mt={10}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Typography
            fontSize={{ xs: '30px', sm: '46px' }}
            fontWeight={700}
            variant="h2"
            mt={2}
          >
            BULLROCK <span style={{ color: '#FF4365' }}>CARD</span>
          </Typography>

          <Typography paragraph mt={3} mb={3} fontWeight={600} color="#fff">
            Get your own card to exchange your main digital crypto assets
            anytime and anywhere in the world.
          </Typography>

          <Typography paragraph mb={3} fontWeight={600} color="#fff">
            Access international prepaid debit Visa / Mastercard / Unionpay card
            immediately. Top up your card with your BULLROCK CARD account
            balance and its immediate conversion system.
          </Typography>

          <Box>
            <List
              textAlign={{ xs: 'center', md: 'left' }}
              style={{ fontWeight: 600 }}
            >
              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemText>
                  <u style={{ fontWeight: 700, color:'#fff' }}>SERVICES:</u>
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0', color:'#fff'}}>
                <ListItemIcon style={{ margin: '0', padding: '0' }}>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px' }}
                  ></i>{' '}
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold',color:'#fff' }}
                >
                  FIAT money withdrawals at any ATM in the world.
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0',color:'#fff'  }}>
                <ListItemIcon>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px'  }}
                  ></i>{' '}
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold',color:'#fff' }}
                >
                  Online shopping.
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemIcon>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px' }}
                  ></i>{' '}
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold', color:'#fff' }}
                >
                  Purchases at participating stores.
                </ListItemText>
              </ListItem>
            </List>

            <List>
              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemText>
                  <u style={{ fontWeight: 'bold' ,color:'#fff'}}>MINIMUM REQUIREMENTS:</u>
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemIcon>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px' }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold',color:'#fff' }}
                >
                  Personal documents: Passport / ID / CI12.
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemIcon>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px' }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold', color:'#fff' }}
                >
                  Online shopping.
                </ListItemText>
              </ListItem>

              <ListItem style={{ margin: '0', padding: '0' }}>
                <ListItemIcon>
                  {' '}
                  <i
                    class="fa fa-check-circle"
                    style={{ color: '#31AF91', fontSize: '25px' }}
                  ></i>
                </ListItemIcon>
                <ListItemText
                  style={{ marginLeft: '-20px', fontWeight: 'bold', color:'#fff' }}
                >
                  A service bill: water, electricity, gas, mobile telephony,
                  prepaid medicine, car insurance, etc.
                </ListItemText>
              </ListItem>
            </List>
            <a
              href="https://community.bullrock.vip/"
              target="_blank"
              style={{ textDecoration: 'none' }}
            >
              <Button
                pl={{ xs: 2 }}
                style={{
                  background: '#FF4365',
                  color: 'white',
                  borderRadius: '30px',
                  margin: '30px 0px',
                  padding: '10px 20px',
                  fontWeight: 'bold',
                }}
              >
                GO TO BULLROCK CARD
              </Button>
            </a>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
