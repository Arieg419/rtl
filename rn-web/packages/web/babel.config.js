module.exports = function (api) {
  return {
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-proposal-export-default-from",
    ],
    env: {
      production: {
        plugins: [
          "babel-plugin-transform-remove-console",
          "babel-plugin-transform-remove-debugger",
        ],
      },
    },
  };
};
