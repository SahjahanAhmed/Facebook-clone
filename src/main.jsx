import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToggleContextProvider } from "./context/ToggleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToggleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleContextProvider>
  </React.StrictMode>
);
