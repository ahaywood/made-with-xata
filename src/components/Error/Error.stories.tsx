import type { Meta, StoryObj } from '@storybook/react';
import { Error } from './Error';

const meta: Meta<typeof Error> = {
  title: 'Shared/Error',
  component: Error,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Error>;

export const Primary: Story = {
  args: {
    message: 'This is an error message.',
  },
};
