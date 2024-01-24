
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '.';

const meta = {
  title: 'NootyEditor/Toolbar',
  component: Toolbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
};
