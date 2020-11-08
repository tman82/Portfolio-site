import React from 'react';
import Nav from './components/Nav'
import Intro from './components/Intro'
import WorkTitle from './components/WorkTitle'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills' 
import Footer from './components/Footer' 
import './App.css';


function App() {
  return (
    <div className="App">
      <Intro />
      <WorkTitle />
      <Portfolio />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
