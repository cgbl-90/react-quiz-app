import logo from "./logo.svg";
import carmen from "./carmen.svg";
import TestQuestions from "./TestQuestions";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img src={carmen} className="logos" alt="Carmen Lopez" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} className="logos app-logo" alt="logo" />
        </a>
      </header>
      <main>
        <TestQuestions value={false} />
      </main>
      <footer>Coded with 💕 from Montenegro by Carmen López @ 2022</footer>
    </div>
  );
}

export default App;
