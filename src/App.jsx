import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Best from './component/Best/Best';
import Premium from './component/Premium/Premium';
import Upcomming from './component/upcoming/Upcomming';
import Latest from './component/Latest/Latest';
import Adone from './component/Advertise/Adone';
import Adtwo from './component/Advertise/Adtwo';
import Popular from './component/Popular/Popular';
import Adthree from './component/Advertise/Adthree';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Best/>
      <Premium/>
      <Upcomming/>
<Adone/>
<Latest/>
<Adtwo/>
<Popular/>
<Adthree/>
    </>
  )
}

export default App
