// import React from "react";
// import Web3 from "web3";
// import { Contract } from "@ethersproject/contracts";
// import { useWeb3React } from "@web3-react/core";
// // import token_ABI from "./contract/token_ABI.json";
// import stake_ABI from "./contract/stake_ABI.json";
// import { tokenAddress, stakeAddress } from "./contract/addresses";

// // const web3 = new Web3(Web3.givenProvider);

// // function useContract(abi, address) {
// //   return React.useMemo(
// //     () => new web3.eth.Contract(abi, address),
// //     [abi, address]
// //   );
// // }

// // export function useTokenContract() {
// //   return useContract(token_ABI, tokenAddress);
// // }

// // export function useStakeContract() {
// //   return useContract(stake_ABI, stakeAddress);
// // }
// function useContract(address, ABI) {
//   const { active, error, library } = useWeb3React();
//   return React.useMemo(() => {
//     if (active && !error && library) {
//       const signer = library.getSigner();
//       return new Contract(address, ABI, signer);
//     } else {
//       return null;
//     }
//   }, [address, ABI, active, error, library]);
// }

// export function useTokenContract() {
//   return useContract(tokenAddress, token_ABI);
// }
// export function useStakeContract() {
//   return useContract(stakeAddress, stake_ABI);
// }
