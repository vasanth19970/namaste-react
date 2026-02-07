import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello From React, to get hooked 🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
