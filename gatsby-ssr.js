const React = require('react');
const GlobalLayout = require('./src/components/templates/GlobalLayout').default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <GlobalLayout {...props}>{element}</GlobalLayout>;
};
