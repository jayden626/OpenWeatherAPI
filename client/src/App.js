import './App.css';
import Weather from './components/Weather/Weather';
import Navbar from './components/Navbar/Navbar';
import WeatherList from './components/WeatherList/WeatherList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar title="OpenWeatherAPI"/>
      </header>
      <main>
        <WeatherList/>
      </main>
    </div>
  );
}

export default App;
