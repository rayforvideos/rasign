import type { Preview } from '@storybook/react';
import { DesignSystemProvider } from '@rasign/react';
import '@rasign/tokens/service-a/css/light.css';
import '@rasign/tokens/service-a/css/dark.css';
import '@rasign/tokens/service-b/css/light.css';
import '@rasign/tokens/service-b/css/dark.css';
import React from 'react';

const preview: Preview = {
  globalTypes: {
    brand: {
      description: 'Brand',
      toolbar: {
        title: 'Brand',
        items: ['service-a', 'service-b'],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Theme',
      toolbar: {
        title: 'Theme',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    brand: 'service-a',
    theme: 'light',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark';
      const brand = context.globals.brand as string;
      return React.createElement(
        'div',
        { 'data-brand': brand, 'data-theme': theme },
        React.createElement(
          DesignSystemProvider,
          { brand, defaultTheme: theme },
          React.createElement(Story),
        ),
      );
    },
  ],
};

export default preview;
