import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Best from './component/Best/Best';
import Premium from './component/Premium/Premium';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Best/>
      <Premium/>
    </>
  )
}

export default App
