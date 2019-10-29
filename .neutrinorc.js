const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  use: [
    airbnb(),
    react({
      html: {
        title: 'jsone-docs'
      }
    }),
    jest()
  ]
};
