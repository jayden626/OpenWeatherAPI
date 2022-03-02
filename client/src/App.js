// import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather/Weather';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="OpenWeatherAPI"/>
      </header>
      <main>
        <Weather lat={-32.8679} lon={151.2073}/>
        <Weather lat={-33.8679} lon={151.2073}/>
      </main>
    </div>
  );
}

export default App;
