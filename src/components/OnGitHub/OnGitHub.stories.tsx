import type { Meta, StoryObj } from '@storybook/react';
import { OnGitHub } from './OnGitHub';

const meta: Meta<typeof OnGitHub> = {
  title: 'Shared/OnGitHub',
  component: OnGitHub,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof OnGitHub>;

export const Primary: Story = {
  args: {
    href: "#"
  },
};