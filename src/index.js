import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./app"
import reportWebVitals from "./reportWebVitals"
// bootstrap
import "bootstrap/dist/css/bootstrap.css"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

reportWebVitals()
