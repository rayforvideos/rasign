import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Row, Column, Avatar, Typography, Button, Badge } from '@rasign/react';
import React from 'react';

function UserCard() {
  return React.createElement(
    Surface,
    { as: 'article', elevation: 'md', rounded: 'lg', padding: '4' },
    React.createElement(
      Row,
      { gap: '4', align: 'center' },
      React.createElement(Avatar, { initials: 'JD', size: 'lg' }),
      React.createElement(
        Column,
        { gap: '1', style: { flex: 1 } },
        React.createElement(
          Row,
          { gap: '2', align: 'center' },
          React.createElement(Typography, { as: 'span', variant: 'heading-sm' }, '홍길동'),
          React.createElement(Badge, { variant: 'success' }, 'Active'),
        ),
        React.createElement(Typography, { as: 'span', variant: 'body-sm' }, 'Frontend Developer'),
      ),
      React.createElement(Button, { variant: 'secondary', size: 'sm' }, '팔로우'),
    ),
  );
}

const meta: Meta = { title: 'Examples/User Card', component: UserCard };
export default meta;
export const Default: StoryObj = {};
