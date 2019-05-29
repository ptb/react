/* @jsx h @jsxFrag Fragment */
import { createElement as h } from "../react.js"
import { css } from "../style.js"
import styles from "./App.css.js"

export default function App () {
  return h ("div", {
    "className": css (styles.app)
  }, "Hello, World!")
}
