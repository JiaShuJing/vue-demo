module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "babel-plugin-istanbul",
      {
        extension: [".js", ".ts",".vue"]
      }
    ],
    "@babel/plugin-transform-modules-commonjs"
  ],

  env: {
    test: {
      plugins: [
        [
          "istanbul",
          {
            useInlineSourceMaps: false
          }
        ]
      ]
    }
  }
};
