// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest', 'react', 'stage-0']}
};

exports.hot = true;
