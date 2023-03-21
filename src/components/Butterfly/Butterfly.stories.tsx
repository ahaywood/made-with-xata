import type { Meta, StoryObj } from '@storybook/react';
import { Butterfly } from './Butterfly';

const meta: Meta<typeof Butterfly> = {
  title: 'Shared/Butterfly',
  component: Butterfly,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Butterfly>;

export const Primary: Story = {
  args: {
    height: 44,
    width: 44
  },
};