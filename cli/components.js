const fs = require('fs');
const path = require('path');
const minimist = require('minimist');

// Получаем параметры командной строки
const args = minimist(process.argv, { alias: { name: 'n' } });

// Извлекаем имя компонента
const componentName = args.name;

// Создаем папку компонента
fs.mkdirSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName)
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

// Создаем файл компонента
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.jsx`),
  componentTemplate,
);

// Создаем index.js
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, 'index.js'),
  `export default from './${componentName}';`,
);

// Создаем стили
fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'components', componentName, `${componentName}.css`),
  `.${componentName} {}`,
);