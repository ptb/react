import { regex } from "rollup-plugin-bundleutils"
import commonjs from "rollup-plugin-commonjs"
import nodeResolve from "rollup-plugin-node-resolve"
import replace from "rollup-plugin-replace"
import { terser } from "rollup-plugin-terser"
import pkg from "./package.json"

export default {
  "external": ["react"],
  "input": "index.js",
  "output": {
    "banner": `/*! @copyright Facebook, Inc. | @license MIT | @link reactjs.org | @version ${pkg.devDependencies.react} */`,
    "file": pkg.module,
    "format": "esm"
  },
  "plugins": [
    replace ({
      "process.env.NODE_ENV": JSON.stringify ("production")
    }),
    nodeResolve (),
    commonjs ({
      "include": "node_modules/**",
      "sourceMap": false
    }),
    terser ({
      "mangle": {
        "toplevel": true
      },
      "output": {
        "comments": /^!/u
      },
      "sourcemap": false
    }),
    regex ([
      ['"react"', '"./react.js"']
    ])
  ]
}
