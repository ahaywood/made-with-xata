import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Shared/Avatar',
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    alt: 'Some Alt Text',
    src: 'https://i.pravatar.cc/150?img=66',
  },
};

export const NoImage: Story = {
  args: {
    alt: 'Some Alt Text',
    avatarColor: 'malachite'
  },
};