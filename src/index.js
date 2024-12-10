//import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// class Component1 extends React.Component {
//   render() {
//     return <h1>Compnent123</h1>;
//   }
// }

// class Component2 extends React.Component {
//   render() {
//     return <h1>Compnent234</h1>;
//   }
// }
//const myjsx = <h1> Hello world </h1>;
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
