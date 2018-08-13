import typescript from "rollup-typescript";
export default {
  input: "types/index.ts",
  output: {
    file: "lib/index.js",
    format: "cjs"
  },
  external: ["bluebird"],
  plugins: [typescript()]
};
