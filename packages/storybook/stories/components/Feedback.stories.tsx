import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, Divider, Row, Column } from '@rasign/react';
import React from 'react';

const meta: Meta = { title: 'Components/Feedback' };
export default meta;

export const SpinnerSizes: StoryObj = {
  render: () =>
    React.createElement(
      Row,
      { gap: '4', align: 'center' },
      React.createElement(Spinner, { size: 'sm' }),
      React.createElement(Spinner, { size: 'md' }),
      React.createElement(Spinner, { size: 'lg' }),
      React.createElement(Spinner, { size: 'xl' }),
    ),
};

export const DividerHorizontal: StoryObj = {
  render: () =>
    React.createElement(Column, { gap: '4' }, 'Above', React.createElement(Divider, null), 'Below'),
};

export const DividerVertical: StoryObj = {
  render: () =>
    React.createElement(
      Row,
      { gap: '4', align: 'center', style: { height: '40px' } },
      'Left',
      React.createElement(Divider, { orientation: 'vertical' }),
      'Right',
    ),
};
