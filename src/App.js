
import './App.css';
import Header from "./compontents/header/Header";
import Companies from './compontents/companies/Companies';
import Genrallntro from "./compontents/genrallntro/Genrallntro";
import Cryptowallet from './compontents/cryptowallet/Cryptowallet';
import Calculateblrs from "./compontents/calculateBlrs/Calculateblrs";
import Cryptos from './compontents/cryptocurrenies/cryptos';
import Started from './compontents/getStarted/GetStarted';
import Roadmap from './compontents/roadMap/RoadMap';
import Bullrock from './compontents/bullRock/BullRock';
import BullPay from   './compontents/bullpay/bullpay';
import Features from './compontents/features/Features';
import Community from './compontents/community/Community';
import Footer from './compontents/footer/Footer';

import ClaimAirDrop from "./staking";
import Welcome from "./compontents/welcome/welcome";

function App() {
  return (
    <div >
     <Header></Header>
     {/* <Welcome></Welcome> */}
     <Genrallntro></Genrallntro>
     <Companies></Companies>
     <Cryptowallet></Cryptowallet>
     <Calculateblrs></Calculateblrs>
     <ClaimAirDrop></ClaimAirDrop>
     <Cryptos></Cryptos>
     <Started></Started>
     <Roadmap></Roadmap>
     <Bullrock></Bullrock>
     <Features></Features>
     <Community></Community>
     <Footer></Footer>
    </div>
  );
}

export default App;
