import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const spacingTokens = ['1', '2', '3', '4', '5', '6', '8', '10', '12', '16'];

function SpacingScale() {
  return React.createElement('div', { style: { display: 'flex', flexDirection: 'column', gap: '8px' } },
    ...spacingTokens.map((s) =>
      React.createElement('div', { key: s, style: { display: 'flex', alignItems: 'center', gap: '12px' } },
        React.createElement('code', { style: { width: '120px', fontSize: '12px' } }, `--ds-spacing-${s}`),
        React.createElement('div', {
          style: {
            height: '24px',
            width: `var(--ds-spacing-${s})`,
            backgroundColor: 'var(--ds-color-accent)',
            borderRadius: '4px',
          },
        }),
      ),
    ),
  );
}

const meta: Meta = { title: 'Tokens/Spacing Scale', component: SpacingScale };
export default meta;
export const Default: StoryObj = {};
