import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@rayforvideos/react';
import React from 'react';

const variants = [
  { variant: 'heading-xl', label: 'Heading XL' },
  { variant: 'heading-lg', label: 'Heading LG' },
  { variant: 'heading-md', label: 'Heading MD' },
  { variant: 'heading-sm', label: 'Heading SM' },
  { variant: 'body', label: 'Body' },
  { variant: 'body-sm', label: 'Body SM' },
  { variant: 'caption', label: 'Caption' },
  { variant: 'code', label: 'Code' },
] as const;

function TypographyScale() {
  return React.createElement(
    'div',
    { style: { display: 'flex', flexDirection: 'column', gap: '16px' } },
    ...variants.map(({ variant, label }) =>
      React.createElement(
        Typography,
        { key: variant, variant },
        `${label} — 다람쥐 헌 쳇바퀴에 타고파 The quick brown fox`,
      ),
    ),
  );
}

const meta: Meta = { title: 'Tokens/Typography Scale', component: TypographyScale };
export default meta;
export const Default: StoryObj = {};
