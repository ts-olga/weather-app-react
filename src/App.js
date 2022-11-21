import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App </h1>
        <Weather city="Shanghai" />
      </header>
    </div>
  );
}

export default App;
