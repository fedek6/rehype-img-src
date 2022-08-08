import ts from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";

export default [
  {
    input: "src/main.ts",
    output: {
      file: "dist/main.js",
      format: "esm",
    },
    plugins: [externals(), nodeResolve(), ts(), terser()],
  },
  {
    input: "src/main.ts",
    output: {
      file: "dist/main.cjs.js",
      format: "cjs",
    },
    plugins: [externals(), nodeResolve(), ts(), terser()],
  },
];
