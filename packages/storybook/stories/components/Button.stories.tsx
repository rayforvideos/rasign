import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@rasign/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Button', variant: 'primary' } };
export const Secondary: Story = { args: { children: 'Button', variant: 'secondary' } };
export const Ghost: Story = { args: { children: 'Button', variant: 'ghost' } };
export const Small: Story = { args: { children: 'Button', size: 'sm' } };
export const Large: Story = { args: { children: 'Button', size: 'lg' } };
export const Disabled: Story = { args: { children: 'Button', disabled: true } };
