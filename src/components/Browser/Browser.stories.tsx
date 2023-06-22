import type { Meta, StoryObj } from '@storybook/react';
import { Browser } from './Browser';

const meta: Meta<typeof Browser> = {
  title: 'Shared/Browser',
  component: Browser,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Browser>;

export const Primary: Story = {
  args: {
    name: 'A cute kitten',
    featuredImage: 'http://placekitten.com/1080/1080',
    width: 1080,
    height: 720,
  },
};
