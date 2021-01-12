import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  const test = [];
  new URLSearchParams(window.location.search).forEach((value, key) => {
    test.push(`${key}: ${value}`);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Display Query Params</p>
      </header>
      <main className="App-main">
        {test.map((str, index) => (
          <div key={index}>{str}</div>
        ))}
      </main>
    </div>
  );
};
