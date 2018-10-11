const fs = require('fs');
const path = require('path');


const minimist = require('minimist');
const args = minimist(process.argv, { alias: {name: 'n'}});
const componentName = args.name;

fs.mkdirSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName )
);

const componentTemplate = `import './${componentName}.css';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
export default class ${componentName} extends PureComponent {
  static propTypes = {};
  static defaultProps = {};
  render() {
    return (
      <div className="${componentName}"></div>
    );
  }
}
`;

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
    componentTemplate,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
    `export default from './${componentName}';`,
);

fs.writeFileSync(
    path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
    `.${componentName} {}`,
);