import ts from "rollup-plugin-ts";
import { terser } from "rollup-plugin-terser";


export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs'
  },
  plugins: [
    ts(),
    terser()
  ]
};
