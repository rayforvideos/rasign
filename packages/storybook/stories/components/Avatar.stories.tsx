import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@rayforvideos/react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: { size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] } },
};
export default meta;

export const WithImage: StoryObj = {
  args: { src: 'https://i.pravatar.cc/100', alt: 'User', size: 'lg' },
};
export const WithInitials: StoryObj = { args: { initials: 'JD', size: 'lg' } };
