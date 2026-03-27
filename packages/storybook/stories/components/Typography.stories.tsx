import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@rasign/react';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'heading-xl',
        'heading-lg',
        'heading-md',
        'heading-sm',
        'body',
        'body-sm',
        'caption',
        'code',
      ],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Typography>;

export const HeadingXL: Story = {
  args: { as: 'h1', variant: 'heading-xl', children: 'Heading XL' },
};
export const Body: Story = { args: { variant: 'body', children: 'Body text for reading.' } };
export const AsLink: Story = {
  args: { as: 'a', variant: 'body', children: 'Link text', href: '#' },
};
