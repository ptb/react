/* @jsx h @jsxFrag Fragment */
import { createElement as h } from "./react.js"
import { hydrate } from "./react-dom.js"

function App () {
  return h ("div", {}, "Hello, World!")
}

hydrate (h (App), document.getElementById ("root"))
