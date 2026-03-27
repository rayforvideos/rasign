import type { Meta, StoryObj } from '@storybook/react';
import { Row, Column, Surface } from '@rasign/react';
import React from 'react';

function Box({ children }: { children: string }) {
  return React.createElement(
    'div',
    {
      style: {
        padding: '8px 16px',
        backgroundColor: 'var(--ds-color-bg-muted)',
        borderRadius: '4px',
      },
    },
    children,
  );
}

const meta: Meta = { title: 'Components/Layout' };
export default meta;

export const RowExample: StoryObj = {
  render: () =>
    React.createElement(
      Row,
      { gap: '4', align: 'center' },
      React.createElement(Box, null, 'A'),
      React.createElement(Box, null, 'B'),
      React.createElement(Box, null, 'C'),
    ),
};

export const ColumnExample: StoryObj = {
  render: () =>
    React.createElement(
      Column,
      { gap: '4' },
      React.createElement(Box, null, 'A'),
      React.createElement(Box, null, 'B'),
      React.createElement(Box, null, 'C'),
    ),
};

export const SurfaceExample: StoryObj = {
  render: () =>
    React.createElement(
      Surface,
      { elevation: 'md', rounded: 'lg', padding: '6' },
      'Surface with shadow and rounded corners',
    ),
};
