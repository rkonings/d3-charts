import { addDecorator } from '@storybook/react';
import React from 'react';

import GlobalStyles from '../src/GlobalStyle';

import { createGlobalStyle } from 'styled-components';
// https://medium.com/@cbovis/using-the-styled-components-createglobalstyle-api-with-react-storybook-e2e64255d567

const GlobalStyleDecorator = (storyFn) => {
  return (
    <React.Fragment>
      <GlobalStyles />
      {storyFn()}
    </React.Fragment>
  );
};

export default GlobalStyleDecorator;
