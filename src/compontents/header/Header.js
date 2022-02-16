import { Container, Grid, Hidden, Link, Menu, Typography } from "@mui/material";
import { Link as Linkto } from "react-scroll";
// import { styled } from "mui/styles"
import { Box, styled } from "@mui/system";
// import Logo from "./logo.svg";
import clsx from "clsx";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/material/MoveToInbox';

import { Fragment, useContext, useState } from "react";
// import MenuIcon from '@mui/material/Menu';
// import { Inbox, Mail, MailRounded, MenuRounded } from "@mui/icons-material";
import zIndex from "@mui/material/styles/zIndex";
import { useWeb3React } from "@web3-react/core";

// classes/ cs styles section
const useStyles = styled({
  mian: {
    flexGrow: 1,
    padding: "20px 5px",
    backgroundColor: "#01002F",
    backgroud: "#01002F",
    height: "80px",
  },
  logo: {
    maxWidth: 119,
    backgroundColor: "#01002F",
    fontFamily: "Roboto",
    fontSize: "19px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    letterSpacing: "0em",
  },
  linkCont: {
    alignContent: "space-betwen",
    justifyContent: "space-between",
    backgroundColor: "#01002F",
    marginTop: 9,
  },
  myLinks: {
    "& a": {
      color: "white",
      textDecoration: "none",
      paddingBottom: 10,
    },
    "& a:hover": {
      transition: 1,
      borderBottom: "1px solid white",
    },
    padding: "10px 0px",
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
    transition: "0.3s",
    letteSpacing: "0.4px",
    textTransform: "uppercase",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  lunchTest: {
    background: "linear-gradient(180deg, #00C6D2 0%, #007C84 100%)",
    padding: "13px 30px",
    borderRadius: "30px",
  },
  img: {
    // maxWidth : '300%'
  },
});

export default ({ setOpen }) => {
  const { account } = useWeb3React();
  const Dataset = [
    {
      link: "#buyid",
      name: "Buy",
    },
    {
      link: "#claimid",
      name: "Claim",
    },
    {
      link: "#swapid",
      name: "Swap",
    },
    {
      link: "#cardid",
      name: "Card",
    },
    {
      link: "#payid",
      name: "Pay",
    },
    {
      link: "#roadmapid",
      name: "Roadmap",
    },
    {
      link: "#communityid",
      name: "Community",
    },
  ];
  const classes = useStyles();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      background="rgb(19,48,46,.5)"
      style={{ background: "rgb(19,48,46,1)", height: "100%" }}
    >
      <List style={{ color: "white" }}>
        {Dataset.map((link, index) => (
          <ListItem style={{ background: "rgb(19,48,46,1)" }} key={index}>
            <ListItemIcon>
              <i class="fas fa-shapes" style={{ color: "#F53879" }}></i>
            </ListItemIcon>
            <ListItemText>
              <Typography paragraph>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={link.link}
                >
                  {link.name}
                </a>
              </Typography>
            </ListItemText>
          </ListItem>
        ))}

        {account ? (
          <ListItem button style={{ background: "rgb(19,48,46,1)" }}>
            <ListItemIcon>
              <i class="fas fa-shapes" style={{ color: "#F53879" }}></i>
            </ListItemIcon>
            <ListItemText
              primary={account.slice(0, 6) + "..." + account.slice(-4)}
            />
          </ListItem>
        ) : (
          <ListItem
            style={{ background: "rgb(19,48,46,1)" }}
            button
            onClick={() => setOpen(true)}
          >
            <ListItemIcon>
              <i class="fas fa-shapes" style={{ color: "#F53879" }}></i>
            </ListItemIcon>
            <ListItemText primary="Connect" />
          </ListItem>
        )}
      </List>
    </div>
  );
  // mai retuen
  return (
    <>
      {/* <img
        src=""
        style={{ position: "absolute", zIndex: "-111", width: "0.2%" }}
      /> */}
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        flexGrow={1}
        style={{
          padding: "7vh 2% 3vh 2%",
           position: "inherit",
          top: "0",
          zIndex: 2,
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        {/* logo  */}
        <Grid item xs={6} sm={4} md={2} lg={2} style={{ color: "white" }}>
          <img
            src="./img/bull-logo.png"
            style={{ verticalAlign: "middle", marginRight: "8px" }}
            width="140px"
          />
          {/* <img
            src="./img/bulllogo.png"
            style={{ verticalAlign: 'middle' }}
            width="30%"
          /> */}
        </Grid>

        {/* my links  */}
        <Hidden mdDown>
          <Grid
            container
            item
            xs={10}
            sm={8}
            md={8}
            lg={8}
            justifyContent="space-between"
            style={{ textAlign: "left" }}
          >
            {Dataset.map((link) => {
              return (
                <Grid
                  item
                  xs={10}
                  sm={1}
                  md={1}
                  lg={1}
                  style={{ textAlign: "left" }}
                >
                  <a
                    style={{ textDecoration: "none", color: "white" }}
                    href={link.link}
                  >
                    {link.name}
                  </a>
                  {/* <Linkto
                    smooth={true}
                    offset={0}
                    duration={500}
                    delay={0}
                    to={link.link}
                    style={{ cursor: 'pointer' }}
                  >
                    <Typography paragraph>{link.name}</Typography>
                  </Linkto> */}
                </Grid>
              );
            })}

            <Grid
              item
              xs={10}
              sm={1}
              md={1}
              lg={1}
              style={{ textAlign: "left" }}
            >
              {account ? (
                <Typography paragraph>
                  {" "}
                  <a
                    href="#"
                    style={{
                      background: "transparent",
                      borderRadius: "41px",
                      border: "1px solid #FF4365",
                      textDecoration: "none",
                      padding: "10px 20px",
                      borderRadius: "45px",
                      color: "white",
                      cursor: "no-drop",
                    }}
                  >
                    {account.slice(0, 6) + "..." + account.slice(-4)}
                  </a>
                </Typography>
              ) : (
                <Typography paragraph>
                  {" "}
                  <a
                    href="#"
                    style={{
                      background: "transparent",
                      borderRadius: "41px",
                      border: "1px solid #FF4365",
                      textDecoration: "none",
                      padding: "10px 20px",
                      borderRadius: "45px",
                      color: "white",
                    }}
                    onClick={() => setOpen(true)}
                  >
                    {" "}
                    Connect{" "}
                  </a>
                </Typography>
              )}
            </Grid>
          </Grid>

          {/*           
          <Grid
            item
            xs={6}
            sm={2}
            md={2}
            lg={2}
            style={{ textAlign: "center" }}
          >
            <Typography paragraph>
              {" "}
              <a
                href="#"
                style={{
                  background: "transparent",
                  borderRadius: "41px",
                  border: "1px solid #FF4365",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: "45px",
                  color: "white",
                }}
              >
                {" "}
                Connect{" "}
              </a>
            </Typography>
          </Grid>

 */}
        </Hidden>

        {/* Mobile view menu */}

        <Hidden mdUp>
          <Grid item sm={6} style={{ textAlign: "center" }}>
            <Button onClick={toggleDrawer("right", true)}>
              <i
                class="fas fa-bars"
                style={{ color: "#F53879", fontSize: "30px" }}
              ></i>
            </Button>
          </Grid>

          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
        </Hidden>
      </Grid>
    </>
  );
};


