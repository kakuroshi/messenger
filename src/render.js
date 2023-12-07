import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";

const root = ReactDOMClient.createRoot(document.getElementById('root'))

const render = (state) => {
    root.render(<App state={state} />)
}

export default render