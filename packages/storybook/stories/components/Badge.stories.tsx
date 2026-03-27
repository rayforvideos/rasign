import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@rasign/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: { control: 'select', options: ['default', 'success', 'danger', 'warning'] },
  },
};
export default meta;

export const Default: StoryObj = { args: { children: 'Badge' } };
export const Success: StoryObj = { args: { children: 'Active', variant: 'success' } };
export const Danger: StoryObj = { args: { children: 'Error', variant: 'danger' } };
