import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { project } from './Card.mocks';

const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: { project },
};
