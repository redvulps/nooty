
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Editor } from '.';

const meta = {
  title: 'NootyEditor/Editor',
  component: Editor,
  tags: ['autodocs'],
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.'
  }
};
