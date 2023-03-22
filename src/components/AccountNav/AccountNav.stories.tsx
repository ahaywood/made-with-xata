import type { Meta, StoryObj } from '@storybook/react';
import { AccountNav } from './AccountNav';
import { user } from './AccountNav.mocks';

const meta: Meta<typeof AccountNav> = {
  title: 'Shared/AccountNav',
  component: AccountNav,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccountNav>;

export const Primary: Story = {
  args: {
    user: { ...user },
  },
};
