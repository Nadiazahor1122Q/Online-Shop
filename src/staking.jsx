// import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
// // import { AppContext } from "./utils/AppContext";
// import Web3 from "web3";
// // import { toast } from "react-toastify";
// // import moment from "moment";
// // import Timer from "./timer";
// // import { stakeAddress } from "./contract/addresses";
// // import { useTokenContract, useStakeContract } from "./hooks";
// // import Loading from "./loading";
// import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
// import { useWeb3React } from "@web3-react/core";
// /**
//  * @author
//  * @function ClaimAirDrop
//  **/

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
// //  // "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
// const ClaimAirDrop = () => {
//   // const {
//   //   account,
//   //   bullRockContract,
//   //   airDropContract,
//   //   BuyAndCellContract,
//   //   BusdContract,
//   // } = useContext(AppContext);
//   const { account } = useWeb3React();
//   const tokenContract = useTokenContract();
//   const stakeContract = useStakeContract();

//   // SLR
//   const [stakeValue, setStakeValue] = useState("0");
//   const [stakeInput, setStakeInput] = useState("0");
//   const [totalBuried, setTotalBuried] = useState("0");
//   const [balance, setBalance] = useState("0");
//   const [depContent, setDepContent] = useState([]);

//   const [fromVal, setFromVal] = React.useState("0");
//   const [toVal, setoVal] = React.useState(0);
//   const [selectedToken, seSelectedToken] = React.useState("BNB");
//   // const [fromVal, setfromVal] = useState("");
//   const [calculatedPrice, setCalculatedPrice] = useState("0");
//   const [bnbRealTimePrice, setBnbRealTimePrice] = useState("0");
//   const [blrToken, setBlrToken] = useState("");
//   const [claimLoader, setClaimLoader] = useState(false);
//   const [buyLoader, setBuyLoader] = useState(false);
//   const [isAirDropTaken, setIsAirDropTaken] = useState(false);
//   const [isReferralAdd, setIsReferralAdd] = useState(false);
//   const [loading, setloading] = useState(false);
//   const [Avalaible, setAvalaible] = useState(0);
//   let refAddress =
//     typeof localStorage != "undefined"
//       ? localStorage.getItem("bullRock_ref")
//       : "";
//   async function getDepoisits() {
//     const withdrawltime = await stakeContract.withdrawltime();
//     try {
//       const amountOfDeposit = await stakeContract.getUserAmountOfDeposits(
//         account
//       );
//       var el = [];
//       for (let n = 0; n < +amountOfDeposit; n++) {
//         const depInfo = await stakeContract.getUserDepositInfo(
//           account,
//           n.toString()
//         );
//         const devInfo = await stakeContract.getMaxPercentage(depInfo[5]);
//         // const per = await stakeContract.methods
//         //   .getUserPercentage(account, n.toString())
//         //   .call();
//         const halfcut = +depInfo[4];
//         const ele = (
//            <Box
//             style={{
//               background:
//                 "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
//               textAlign: "center",
//               borderRadius: "40px",
//               padding: "5px",
//             }}
//             mr={4}
//             my={3}
//           >
//             <Box
//               style={{
//                 background: "#131128",
//                 textAlign: "center",
//                 borderRadius: "40px",
//               }}
//               height="100%"
//               p={{ xs: 4, sm: 6 }}
//             >
//               <Grid container flexGrow={1}>
//                 <Grid item xs={12} sm={6} style={{ fontSize: "22px" }}>
//                   <Box component="h5" align="left" my={2}>
//                     BNBULL
//                   </Box>
//                   <Box component="h5" align="left" my={2}>
//                     Your Reward for this Month : {+devInfo / 10000000000 / 2}
//                   </Box>
//                   <Box component="h5" align="left" my={2}>
//                     You can claim your token after this time :{" "}
//                     <Timer
//                       getDepoisits={getDepoisits}
//                       init={init}
//                       time={+depInfo[3] + +withdrawltime}
//                     />
//                   </Box>

//                   {/* CLAIM button is here */}

//                   <Button
//                     style={{
//                       border: "2px solid #FF4365",
//                       padding: "8px 31%",
//                       borderRadius: "41px",
//                       cursor:
//                         +moment().format("X") < +depInfo[3] + +withdrawltime
//                           ? "no-drop"
//                           : "pointer",
//                       color: "#fff",
//                       fontWeight: 900,
//                     }}
//                     disabled={
//                       +moment().format("X") < +depInfo[3] + +withdrawltime
//                     }
//                     onClick={() => handleClaim(n.toString())}
//                   >
//                     CLAIM
//                   </Button>
//                 </Grid>
//                 <Grid item xs={12} sm={6} style={{ fontSize: "22px" }}>
//                   <Box my={2} align="right" component="h5">
//                     BLRS
//                   </Box>
//                   <Box my={2} align="right" component="h5">
//                     Your Invested : {+depInfo[0] / 10000000}
//                   </Box>
//                   <Box my={2} align="right" component="h5">
//                     You can Unstake your token after this time :{" "}
//                     <Timer
//                       getDepoisits={getDepoisits}
//                       init={init}
//                       time={+depInfo[2] + +withdrawltime}
//                     />
//                   </Box>

//                   {/* unstack button is here */}
//                   <Box align="center">
//                     <Button
//                       style={{
//                         border: "2px solid #FF4365",
//                         padding: "8px 31%",
//                         borderRadius: "41px",
//                         color: "#fff",
//                         fontWeight: 900,
//                         cursor:
//                           +moment().format("X") < +depInfo[2] + +withdrawltime
//                             ? "no-drop"
//                             : "pointer",
//                         color: "#fff",
//                         fontWeight: 900,
//                       }}
//                       disabled={
//                         +moment().format("X") < +depInfo[2] + +withdrawltime
//                       }
//                       onClick={() => handleUnstack(n.toString())}
//                     >
//                       UNSTAKE
//                     </Button>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Box>
//           </Box>
//         );
//         el.push(ele);
//       }

//       setDepContent(el);
//     } catch (error) {
//       console.error("LOOPERROR", error);
//     }
//   }
//   async function init() {
//     try {
//       const v = await tokenContract.allowance(account, stakeAddress);
//       const userTotalDeposit = await stakeContract.getUserTotalDeposits(
//         account
//       );
//       const balance = await tokenContract.balanceOf(account);
//       if (stakeContract && +stakeInput > 0) {
//         const amount = await stakeContract.getMaxPercentage(
//           (+stakeInput * 10000000000).toLocaleString("fullwide", {
//             useGrouping: false,
//           })
//         );
//         setAvalaible(+amount / 10000000000);
//       }
//       setTotalBuried(+userTotalDeposit / 10000000);
//       setBalance(+balance / 10000000);
//       setStakeValue(v);
//     } catch (error) {
//       console.error("INITFUNCTION", error);
//     }
//   }
//   useEffect(() => {
//     if (stakeContract) {
//       getDepoisits();
//       init();
//     }
//   }, [account, tokenContract, stakeInput, stakeContract]);
//   useEffect(() => {
//     if (refAddress) {
//       setIsReferralAdd(false);
//     } else {
//       setIsReferralAdd(true);
//     }
//   }, [refAddress]);

//   const handleClaim = async (n) => {
//     if (account) {
//       try {
//         setloading(true);

//         const tx = await stakeContract.winthdrawBullBnbTokens(n);
//         await tx.wait();
//         setloading(false);
//         toast.success("Success! Transaction confirmed.");
//         getDepoisits();
//         init();
//       } catch (error) {
//         setloading(false);
//         if (error?.data?.message) {
//           toast.error(error?.data?.message);
//         } else {
//           toast.error(error?.message);
//         }
//       }
//     }
//   };

//   const handleUnstack = async (n) => {
//     if (account) {
//       try {
//         setloading(true);

//         const tx = await stakeContract.unstake(n);
//         await tx.wait();
//         toast.success("Success! Transaction confirmed.");
//         setloading(false);
//         getDepoisits();
//         init();
//       } catch (error) {
//         if (error?.data?.message) {
//           toast.error(error?.data?.message);
//         } else {
//           toast.error(error?.message);
//         }
//         setloading(false);
//       }
//     }
//   };

//   const handleProve = async () => {
//     if (!account) {
//       toast.error("please connect your wallet");
//     } else if (!stakeInput) {
//       toast.error("please enter stake amount");
//     } else {
//       const value = +stakeInput * 10000000;

//       try {
//         setloading(true);
//         const tx = await tokenContract.approve(stakeAddress, value);
//         await tx.wait();
//         const tx1 = await stakeContract.stakeBlrsTokens(value);
//         await tx1.wait();
//         setloading(false);
//         toast.success("Success! Transaction confirmed.");
//         getDepoisits();
//         init();
//       } catch (error) {
//         setloading(false);
//         if (error?.data?.message) {
//           toast.error(error?.data?.message);
//         } else {
//           toast.error(error?.message);
//         }
//       }
//     }
//   };

//   return (
//     <Box
//       id="swapid"
//       background="red"
//       color="#fff"
//       py={2}
//       style={{ maxWidth: "1440px", margin: "auto" }}
//     >
//       <Loading open={loading} />
//       <Container maxWidth="lg">
//         <Box
//           component="h3"
//           textAlign="center"
//           fontSize={{ xs: "20px", sm: "40px" }}
//           style={{ color: "#FF4365", letterSpacing: "18px" }}
//         >
//           Stake - BLRS
//         </Box>

//         <Box
//           component="h3"
//           my={5}
//           fontWeight={500}
//           fontSize={{ xs: "20px", sm: "20px" }}
//           paragraph
//           align="center"
//         >
//           Stake BLRS to daily receive BNBULL
//         </Box>

//         <Container style={{ maxWidth: "1000px" }}>
//           <Grid
//             container
//             justifyContent="center"
//             spacing="30"
//             style={{ marginBottom: "20px" }}
//           >
//             <Grid item xs={12} sm={12} md={5}>
//               <Box
//                 style={{
//                   maxWidth: "300px",
//                   margin: "auto",
//                   background:
//                     "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
//                   textAlign: "center",
//                   borderRadius: "40px",
//                   padding: "5px",
//                 }}
//                 height="230px"
//               >
//                 <Box
//                   style={{
//                     background: "#131128",
//                     textAlign: "center",
//                     padding: "10px 0px",
//                     borderRadius: "40px",
//                   }}
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="center"
//                   height="91%"
//                 >
//                   <Box>
//                     <Box component="h4" my={3}>
//                       Total BLRS Staking: {totalBuried}
//                     </Box>

//                     <Box component="h4" my={3}>
//                       Total BLRS Tokens: {balance}{" "}
//                     </Box>

//                     <Box component="h4" my={3}>
//                       Total BLRS Value: $0.000{" "}
//                     </Box>
//                   </Box>
//                 </Box>
//               </Box>
//               <Typography
//                 paragraph
//                 style={{
//                   textAlign: "center",
//                   margin: "10px 0px",
//                   letterSpacing: "1.8px",
//                 }}
//               >
//                 Available :
//                 {(+Avalaible).toLocaleString("fullwide", {
//                   useGrouping: false,
//                 })}
//               </Typography>
//             </Grid>

//             {/* second grid */}

//             <Grid
//               maxWidth={{ xs: "100%", md: "60%" }}
//               item
//               xs={12}
//               sm={12}
//               md={5}
//             >
//               <Box
//                 style={{
//                   maxWidth: "300px",
//                   margin: "auto",
//                   background:
//                     "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
//                   textAlign: "center",
//                   borderRadius: "40px",
//                   padding: "5px",
//                 }}
//                 height="230px"
//               >
//                 <Box
//                   style={{
//                     background: "#131128",
//                     textAlign: "center",
//                     padding: "10px 0px",
//                     borderRadius: "40px",
//                   }}
//                   display="flex"
//                   alignItems="center"
//                   justifyContent="center"
//                   height="91%"
//                 >
//                   <Box component="h4" my={3}>
//                     +BNBULLAPT : 100%
//                   </Box>
//                 </Box>
//               </Box>
//               <Typography
//                 paragraph
//                 style={{
//                   textAlign: "center",
//                   margin: "10px 0px",
//                   letterSpacing: "1.8px",
//                 }}
//               >
//                 25% 50% 75% 100%
//               </Typography>
//             </Grid>
//           </Grid>
//           <Box style={{ textAlign: "center" }}>
//             <input
//               type="text"
//               placeholder="Type an amount to stake"
//               value={stakeInput}
//               onChange={(e) => setStakeInput(e.target.value)}
//               style={{
//                 border: "2px solid #FF4365",
//                 borderRadius: "41px",
//                 minWidth: "64%",
//                 padding: "22px 31px",
//                 margin: "20px auto",
//                 background: "transparent",
//                 color: "white",
//                 textIndent: "8",
//                 outline: "none",
//               }}
//             />

//             {/* APPROVE unstack button is here  */}
//             <Button
//               style={{
//                 border: "2px solid #FF4365",
//                 borderRadius: "41px",
//                 minWidth: "70%",
//                 padding: "10px 31px",
//                 margin: "20px auto",
//                 background: "#FF4365",
//                 color: "white",
//                 fontSize: "22px",
//               }}
//               onClick={handleProve}
//             >
//               APPROVE
//             </Button>
//           </Box>
//           {depContent}
//         </Container>
//       </Container>
//     </Box>
//   );
// };
  import { Button, Container, Grid, Typography, Box } from "@material-ui/core";
import { useWeb3React } from "@web3-react/core";

   function ClaimAirDrop (){
     return (
         <Box
      id="swapid"
      background="red"
      color="#fff"
      py={2}
      style={{ maxWidth: "1440px", margin: "auto" }}
    >
   
      <Container maxWidth="lg">
        <Box
          component="h3"
          textAlign="center"
          fontSize={{ xs: "20px", sm: "40px" }}
          style={{ color: "#FF4365", letterSpacing: "18px" }}
        >
          Stake - BLRS
        </Box>

        <Box
          component="h3"
          my={5}
          fontWeight={500}
          fontSize={{ xs: "20px", sm: "20px" }}
          paragraph
          align="center"
        >
          Stake BLRS to daily receive BNBULL
        </Box>

        <Container style={{ maxWidth: "1000px" }}>
          <Grid
            container
            justifyContent="center"
            spacing="30"
            style={{ marginBottom: "20px" }}
          >
            <Grid item xs={12} sm={12} md={5}>
              <Box
                style={{
                  maxWidth: "300px",
                  margin: "auto",
                  background:
                    "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
                  textAlign: "center",
                  borderRadius: "40px",
                  padding: "5px",
                }}
                height="230px"
              >
                <Box
                  style={{
                    background: "#131128",
                    textAlign: "center",
                    padding: "10px 0px",
                    borderRadius: "40px",
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="91%"
                >
                  <Box>
                    <Box component="h4" my={3}>
                      Total BLRS Staking: 
                    </Box>

                    <Box component="h4" my={3}>
                      Total BLRS Tokens: {" "}
                    </Box>

                    <Box component="h4" my={3}>
                      Total BLRS Value: $0.000{" "}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Typography
                paragraph
                style={{
                  textAlign: "center",
                  margin: "10px 0px",
                  letterSpacing: "1.8px",
                }}
              >
                Available :
               
              </Typography>
            </Grid>

            {/* second grid */}

            <Grid
              maxWidth={{ xs: "100%", md: "60%" }}
              item
              xs={12}
              sm={12}
              md={5}
            >
              <Box
                style={{
                  maxWidth: "300px",
                  margin: "auto",
                  background:
                    "linear-gradient(    170deg,    #FB4469 0.59%,    #48BBF9 53.88%,    #CAE08D 100%  )",
                  textAlign: "center",
                  borderRadius: "40px",
                  padding: "5px",
                }}
                height="230px"
              >
                <Box
                  style={{
                    background: "#131128",
                    textAlign: "center",
                    padding: "10px 0px",
                    borderRadius: "40px",
                  }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height="91%"
                >
                  <Box component="h4" my={3}>
                    +BNBULLAPT : 100%
                  </Box>
                </Box>
              </Box>
              <Typography
                paragraph
                style={{
                  textAlign: "center",
                  margin: "10px 0px",
                  letterSpacing: "1.8px",
                }}
              >
                25% 50% 75% 100%
              </Typography>
            </Grid>
          </Grid>
          <Box style={{ textAlign: "center" }}>
            <input
              type="text"
              placeholder="Type an amount to stake"
            
              style={{
                border: "2px solid #FF4365",
                borderRadius: "41px",
                minWidth: "64%",
                padding: "22px 31px",
                margin: "20px auto",
                background: "transparent",
                color: "#fff",
                textIndent: "8",
                outline: "none",
              }}
            />

            {/* APPROVE unstack button is here  */}
            <Button
              style={{
                border: "2px solid #FF4365",
                borderRadius: "41px",
                minWidth: "70%",
                padding: "10px 31px",
                margin: "20px auto",
                background: "#FF4365",
                color: "white",
                fontSize: "22px",
              }}
             
            >
              APPROVE
            </Button>
          </Box>
          {/* {depContent} */}
        </Container>
      </Container>
    </Box>
     )
   }
 
  



export default ClaimAirDrop;
