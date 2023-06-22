import type { Meta, StoryObj } from '@storybook/react';
import { UserGrid } from './UserGrid';

const meta: Meta<typeof UserGrid> = {
  title: 'Shared/UserGrid',
  component: UserGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserGrid>;

export const Primary: Story = {
  args: {
    // args here
  },
};