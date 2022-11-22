import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App container">
      <Weather />
      <p>
        {" "}
        <a
          href="https://github.com/ts-olga/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Olga Tsyrulyk
      </p>
    </div>
  );
}

export default App;
