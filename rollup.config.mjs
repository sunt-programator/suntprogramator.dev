import resolve from "@rollup/plugin-node-resolve";

export default (async () => ({
  input: {
    "material-web": "public/js/material-web.js",
  },
  output: {
    entryFileNames: "bundle-[name].js",
    dir: "_site/js",
  },
  plugins: [resolve()],
}))();
