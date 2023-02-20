import React from "react";
import ReactDOM from "react-dom/client";

const element = document.getElementById("root")!;

const root = ReactDOM.createRoot(element);

function App() {
  const inputType = "number";
  const minVal = 5;

  return <textarea autoFocus={true} />;
}

root.render(<App />);
