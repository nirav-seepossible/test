import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";


export default [
  {
    input: "wasm_fetch_data",
    output: [
      {
        file: 'dist/cjs/index.js',
        format: "cjs",
        sourcemap: true,
      },
      {
        file: 'dist/esm/index.js',
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve('.ts','.tsx'),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
