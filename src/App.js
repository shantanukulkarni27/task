import logo from './logo.svg';
import './App.css';
import Router from './Router';
import { CardOne,CardTwo,CardThree } from './Components';
import { useState } from 'react';
import AppOne from './Pages/AppOne';
import AppTwo from './Pages/AppTwo';

function App() {


  return (
    <div className="App">
      {/* <Router /> */}
      {/* <AppOne /> */}
      <AppTwo />

    </div>
  );
}

export default App;
