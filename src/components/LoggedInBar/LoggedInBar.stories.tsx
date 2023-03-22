import type { Meta, StoryObj } from '@storybook/react';
import { LoggedInBar } from './LoggedInBar';
import { user } from './LoggedInBar.mocks';

const meta: Meta<typeof LoggedInBar> = {
  title: 'Shared/LoggedInBar',
  component: LoggedInBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof LoggedInBar>;

export const Primary: Story = {
  args: {
    buttonLabel: 'Edit',
    buttonLink: '/admin?edit=1',
    user,
  },
};
