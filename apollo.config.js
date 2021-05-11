const path = require('path');

// Load .env files
const { loadEnv } = require('vue-cli-plugin-apollo/utils/load-env');

// eslint-disable-next-line no-unused-vars
const env = loadEnv([
  path.resolve(__dirname, '.env'),
  path.resolve(__dirname, '.env.local'),
]);

module.exports = {
  client: {
    service: {
      name: 'my-app',
      // URL to the GraphQL API
      url: 'http://localhost:8080/graphql',
    },
    includes: ['src/**/*.{js,jsx,ts,tsx,vue,gql}'],
  },
};
