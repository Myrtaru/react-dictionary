import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src="../img/logo.png"
            className="App-logo
            img-fluid"
            alt="logo"
          />
          <h1>DICTIONARY</h1>
          <hr />
        </header>
        <main>
          <Dictionary />
        </main>
        <hr />
        <footer className="App-footer">
          2021 by Myrta Rüegger.
          {` Open-source Code: `}
          <a
            href="https://github.com/Myrtaru/react-dictionary"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>GitHub,</u>
          </a>
          {` Hosting: `}
          <a
            href="https://https://wonderful-goodall-35fb7a.netlify.app/"
            target="-blank"
            rel="noopener noreferrer"
          >
            <u>Netlify</u>
          </a>
        </footer>
      </div>
    </div>
  );
}
