module.exports = {
  stories: [
    "../libs/core-components/**/*.stories.mdx",
    "../libs/core-components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/preset-scss',
    'storybook-theme-toggle',
    'storybook-dark-mode'
  ],
  // framework: "@storybook/html",
  // refs: {
    // html: {
    //   title: 'Web Components',
    //   url: 'http://localhost:6007',
    //   stories: [
    //     "../libs/core-components/**/*.stories.mdx",
    //     "../libs/core-components/**/*.stories.@(js|jsx|ts|tsx)"
    //   ],
    // },
  //   angular: {
  //     title: 'Angular Components',
  //     url: 'http://localhost:4400',
  //     stories: [
  //       '../libs/c-design-patterns/**/*.stories.mdx',
  //       '../libs/c-design-patterns/**/*.stories.@(js|jsx|ts|tsx)'
  //     ],
  //   }
  // },
  core: {
    builder: "webpack5"
  }
};