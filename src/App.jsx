import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Best from './component/Best/Best';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Best/>
    </>
  )
}

export default App
