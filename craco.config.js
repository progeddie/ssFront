const CracoAlias = require("craco-alias");

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@css/_mixins.scss";
        `,
      },
    },
  },

  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        tsConfigPath: "tsconfig.paths.json",
      },
    },
  ],
};
