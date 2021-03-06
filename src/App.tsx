import React from "react";
import { Head } from "./components/Head";
import Button from "./components/Button";
import { Input } from "./components/Input";
import { GlobalProvider } from "./components/GlobalState";
import { ReducerButtons } from "./components/ReducerButtons";
import BigC from "./components/BigC";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Head title="Meg" />
        <header className="App-header">
          <Button
            onClick={(e) => {
              e.preventDefault();
              console.log(e);
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </Button>

          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <ReducerButtons />
          <Input />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <BigC title="Title" />
      </div>
    </GlobalProvider>
  );
}

export default App;
