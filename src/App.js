import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Kyiv" />
      <footer>
        This project was coded by <a href="https://fabulous-sherbet-795727.netlify.app" target="blank"> TataKor</a> and is{" "}
      <a href="https://github.com/TataKor/react-weather-app"
      target="blank">
        open-sourced on GitHub.
      </a>
      </footer>
      </div>
    </div>
  );
}
