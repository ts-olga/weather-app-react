import logo from "./logo.svg";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello </h1>
        <Weather city="Shanghai" />
      </header>
    </div>
  );
}

export default App;
