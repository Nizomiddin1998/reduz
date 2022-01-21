const path = require("path");
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      services: path.resolve(__dirname, "src/shared/services"),
      interfaces: path.resolve(__dirname, "src/shared/interfaces"),
      routes: path.resolve(__dirname, "src/shared/routes")
    },
  };
  return config;
};
