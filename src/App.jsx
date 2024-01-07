import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Best from './component/Best/Best';
import Premium from './component/Premium/Premium';
import Upcomming from './component/upcoming/Upcomming';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Best/>
      <Premium/>
      <Upcomming/>
    </>
  )
}

export default App
