import type { Meta, StoryObj } from '@storybook/react';
import { ContributorDetails } from './ContributorDetails';
import { contributor } from './ContributorDetails.mocks';

const meta: Meta<typeof ContributorDetails> = {
  title: 'Shared/ContributorDetails',
  component: ContributorDetails,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ContributorDetails>;

export const Primary: Story = {
  args: {
    contributor,
    githubRepo: 'http://github.com',
  },
};
