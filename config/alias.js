
const path = require('path');
const {
  APP_PATH
} = require('./paths');


const alias = {
  components: path.resolve(APP_PATH, 'components'),
  pages:     path.resolve(APP_PATH, 'pages'),
  modules:   path.resolve(APP_PATH, 'modules'),
  assets:     path.resolve(APP_PATH, 'assets')
};

module.exports = {
  alias
};
