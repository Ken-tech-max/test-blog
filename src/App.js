import React from "react";
import "./styles.css";
import * as images from "./images";
import Card from "./components/Card";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Random Image Storage</h1>
        <h3>Lazyloading</h3>
        <section className="wrapper">
          {Object.keys(images).map((image, i) => (
            <Card src={images[image]} key={i} />
          ))}
        </section>
      </header>
    </main>
  );
}

export default App;
