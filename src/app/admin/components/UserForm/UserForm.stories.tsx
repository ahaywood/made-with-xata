import type { Meta, StoryObj } from '@storybook/react';
import { UserForm } from './UserForm';

const meta: Meta<typeof UserForm> = {
  title: 'Shared/UserForm',
  component: UserForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserForm>;

export const Primary: Story = {
  args: {
    // args here
  },
};