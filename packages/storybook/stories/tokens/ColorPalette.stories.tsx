import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const colorTokens = [
  'bg',
  'bg-subtle',
  'bg-muted',
  'text',
  'text-muted',
  'text-subtle',
  'border',
  'border-strong',
  'ring',
  'accent',
  'accent-hover',
  'accent-text',
  'danger',
  'success',
  'warning',
];

function ColorPalette() {
  return React.createElement(
    'div',
    {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        gap: '16px',
      },
    },
    ...colorTokens.map((name) =>
      React.createElement(
        'div',
        { key: name, style: { display: 'flex', flexDirection: 'column', gap: '4px' } },
        React.createElement('div', {
          style: {
            width: '100%',
            height: '64px',
            backgroundColor: `var(--ds-color-${name})`,
            borderRadius: '8px',
            border: '1px solid var(--ds-color-border)',
          },
        }),
        React.createElement('code', { style: { fontSize: '12px' } }, `--ds-color-${name}`),
      ),
    ),
  );
}

const meta: Meta = { title: 'Tokens/Color Palette', component: ColorPalette };
export default meta;
export const Default: StoryObj = {};
