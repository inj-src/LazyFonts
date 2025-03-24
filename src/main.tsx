import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import "../index.d";

const root = document.querySelector("#__LazyFonts__CHROME_EXTENSION__")!;

if (!chrome.storage) root.attachShadow({ mode: "open" });

const shadowRoot = root.shadowRoot!;

ReactDOM.createRoot(shadowRoot).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

if (!chrome.storage) {
    document.querySelectorAll("head style")!.forEach((style) => {
        shadowRoot.appendChild(style);
    });
}
