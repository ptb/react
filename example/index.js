/* @jsx h @jsxFrag Fragment */
import { createElement as h } from "./react.js"
import { hydrate } from "./react-dom.js"
import App from "./App/App.js"

hydrate (h (App), document.getElementById ("root"))
