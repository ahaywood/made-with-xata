import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedScreenshot } from './FeaturedScreenshot';
import { data } from './FeaturedScreenshot.mocks';

const meta: Meta<typeof FeaturedScreenshot> = {
  title: 'Shared/FeaturedScreenshot',
  component: FeaturedScreenshot,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof FeaturedScreenshot>;

export const Primary: Story = {
  args: {
    featuredImages: data,
  },
};
