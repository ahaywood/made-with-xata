import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';
import { user } from './Header.mocks';

const meta: Meta<typeof Header> = {
  title: 'Admin/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {
    user,
  },
};
