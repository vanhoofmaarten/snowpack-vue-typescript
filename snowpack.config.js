module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    "@snowpack/plugin-vue",
    [
      "snowpack-plugin-import-map",
      {
        imports: {
          "*": true,
          vue: "https://cdn.skypack.dev/vue@^3.0.0",
        },
        dev: true,
      },
    ],
  ],
};
