import React, { useContext, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
import Modalbg from "./modal-bsc.svg";
import { withStyles } from "@material-ui/core/styles";
import { injected, walletconnect } from "../connector";
import { useWeb3React } from "@web3-react/core";
import { useMediaQuery } from "@material-ui/core";
const StyledModal = withStyles({
  root: {
    "& .MuiBackdrop-root": {
      "@media (max-width: 400px)": { height: "auto" },
    },

    "& .MuiDialog-paperScrollPaper": {
      background:
        "linear-gradient(    170deg,    #FF4365 0.59%,    #FF4365a1 53.88%,    #FF4365b1 100%  )",
      width: "453px",
      height: "512px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "30px !important",
      padding: "5px",
    },
    "& .dialoge__content__section": {
      background: "#131128",
      borderRadius: "30px",
    },
  },
})(Dialog);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ open, setOpen }) {
  const { activate } = useWeb3React();
  const matches = useMediaQuery("(max-width:600px)");
  var c;
  matches && window.web3 ? (c = injected) : (c = walletconnect);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="modal__main__container">
      <StyledModal
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent className="dialoge__content__section">
          <div
            style={{
              textAlign: "center",
            }}
          >
            <ConnectWalletHeading>Connect to a wallet</ConnectWalletHeading>
            <MetaMaskUpperLayer
              onClick={() => {
                activate(injected);
                handleClose();
              }}
            >
              <MetaMaskInnerLayer>
                <ButtonText>Metamask</ButtonText>
                <div>
                  <img src="image 27.svg" />
                </div>
              </MetaMaskInnerLayer>
            </MetaMaskUpperLayer>
            <OtherWalletButtons
              onClick={() => {
                activate(c);
                handleClose();
              }}
            >
              <ButtonText>Trust wallet</ButtonText>
              <div>
                <img src="image 28.svg" />
              </div>
            </OtherWalletButtons>
            <OtherWalletButtons
              onClick={() => {
                activate(c);
                handleClose();
              }}
            >
              <ButtonText>SafePal</ButtonText>
              <div>
                <img src="image 29.svg" />
              </div>
            </OtherWalletButtons>
          </div>
        </DialogContent>
      </StyledModal>
    </div>
  );
}

const ConnectWalletHeading = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 48px;
  letter-spacing: 1.425px;
  color: #ffffff;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 544px) {
    font-size: 15px;
  }
`;

const MetaMaskUpperLayer = styled.div`
  width: 367px;
  height: 95px;
  background: #131128;
  border: 5px solid #ff4365b1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  @media (max-width: 544px) {
    width: 100%;
  }
`;
const MetaMaskInnerLayer = styled.div`
  background: #131128;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  @media (max-width: 544px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;

const ButtonText = styled.h1`
  font-family: Nunito;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 48px;
  letter-spacing: 1.425px;
  color: #ffffff;
  @media (max-width: 544px) {
    font-size: 15px;
  }
`;

const OtherWalletButtons = styled.div`
  background: #131128;
  border: 5px solid #ff4365b1;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 367px;
  height: 94px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 20px;
  cursor: pointer;
  @media (max-width: 544px) {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
`;
