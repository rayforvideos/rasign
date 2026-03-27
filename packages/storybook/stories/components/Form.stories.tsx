import type { Meta, StoryObj } from '@storybook/react';
import { Input, Checkbox, Switch, Column } from '@rayforvideos/react';
import React from 'react';

const meta: Meta = { title: 'Components/Form' };
export default meta;

export const InputExample: StoryObj = {
  render: () =>
    React.createElement(
      Column,
      { gap: '4', style: { maxWidth: '320px' } },
      React.createElement(Input, { placeholder: 'Default input' }),
      React.createElement(Input, { placeholder: 'Error input', error: true }),
      React.createElement(Input, { placeholder: 'Disabled', disabled: true }),
    ),
};

export const CheckboxExample: StoryObj = {
  render: () =>
    React.createElement(
      Column,
      { gap: '4' },
      React.createElement(Checkbox, { label: 'Option A' }),
      React.createElement(Checkbox, { label: 'Option B', defaultChecked: true }),
      React.createElement(Checkbox, { label: 'Disabled', disabled: true }),
    ),
};

export const SwitchExample: StoryObj = {
  render: () =>
    React.createElement(
      Column,
      { gap: '4' },
      React.createElement(Switch, { label: 'Dark mode' }),
      React.createElement(Switch, { label: 'Notifications', defaultChecked: true }),
      React.createElement(Switch, { label: 'Disabled', disabled: true }),
    ),
};
