//
// export default () => {
//     return(
//         <div style={{display:"table",width:"100%",textAlign:"center"}}>

//             <Box style={{width:"100%",background:"#282454",height:"100vh",display:"table-cell",verticalAlign:"middle"}}>

//                 <img  src="./img/bull-footer.png" />
//                 <img src="./img/bnbulllogo.png" />
//                 <Typography variant="h2" style={{marginTop:"20px",marginLeft:"50px",color:"#FF4365",fontWeight:"bold"}}>
//                 <CountUp
//                 start={1}
//                 end={100}
//                  duration={1.5}
//                  decimal=","
//                 ></CountUp>%
                  
//                 </Typography>

//             </Box>

//         </div>
//     )
// }
import { Button, Container, Grid, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CountUp from 'react-countup';
import React, { useEffect, useState } from "react";

function PreLoader3() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>

      {!completed ? (
          <>
      <div style={{display:"table",width:"100%",textAlign:"center"}}>
          {!loading ? (
              <Box style={{width:"100%",background:"#282454",height:"100vh",display:"table-cell",verticalAlign:"middle"}}>

                            <img  src="./img/bull-footer.png" />
                           <img src="./img/bnbulllogo.png" />
                           <Typography variant="h2" style={{marginTop:"20px",marginLeft:"50px",color:"#FF4365",fontWeight:"bold"}}>
                             <CountUp
                              start={1}
                              end={100}
                               duration={1.5}
                               decimal=","
                              ></CountUp>%
                                
                           </Typography>
              
                       </Box>
          ) : (
              <div className="completed"></div>
              )}
          </div>
        </>
      ) : (
          <>
          {/* <h1>Your Data</h1> */}
        </>
      )}
    </>
  );
}

export default PreLoader3;