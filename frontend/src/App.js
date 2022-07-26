import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';

import Header from './components/A/Header';
import Footer from './components/A/footer';
import Carousel from './components/A/Carousel';
import Menue from './components/A/Menue';
import Offer from './components/A/offer';
import Fplace from './components/A/Fplace';

import CreatePackage from './components/menue/Createpackage';

import Package from './components/Admin/package';
import { MultiStepForm } from './components/MultiStepForm ';

import HalfDay from './components/Dtime/halfDay';
import OneDay from './components/Dtime/oneDay';
import TwofDay from './components/Dtime/twoDay';
import MoreDay from './components/Dtime/moreDay';

import CarType from './components/Vtype/carType';
import BusType from './components/Vtype/busType';
import CabType from './components/Vtype/cabType';
import VanType from './components/Vtype/vanType';
import TukType from './components/Vtype/tukType';

import Bill from './components/Bill/bill';
import SetU from './components/Update/setU';
import DriverU from './components/Update/driverU';
import VehicleU from './components/Update/vehicleU';
import PackageU from './components/Update/packageU';
import PUpdate from './components/Update/pUpdate';


/*<div className='container'><center><MultiStepForm/></center></div>
<Route path="/package" exact compronent={Createpackage}></Route>*/

/*

*/

function App() {
    return(
      <BrowserRouter>
      <div>
      <Carousel/>
      <Header/>
      <Menue/><br/>
      <Route exact path="/create" component={CreatePackage}/><br/>

      <Route path="/car"  component={CarType}/>
      <Route path="/bus"  component={BusType}/>
      <Route path="/cab"  component={CabType}/>
      <Route path="/tuk"  component={TukType}/>
      <Route path="/van"  component={VanType}/>
      
      <Route path="/hday" component={HalfDay}/>
      <Route path="/oday" component={OneDay}/>
      <Route path="/tday" component={TwofDay}/>
      <Route path="/mday" component={MoreDay}/>

      <Route path="/mform" component={MultiStepForm}/>

      <Route path="/bill" component={Bill}/> 

      <Route path="/su" component={SetU}/>
      <Route path="/du" component={DriverU}/>
      <Route path="/vu" component={VehicleU}/>
      <Route path="/pu" component={PackageU}/>
      <Route path="/update"  component={PUpdate}/>
      

      <Route path="/Admin"  component={Package}/><br/>

      <div className='container'><center><Route path="/multi"  component={MultiStepForm}/></center></div><br/>
      <Offer/>
      <br/>
      <Fplace/>
      <br/>
      <Footer/>
      </div> 
      </BrowserRouter>
    )
  }
export default App;
