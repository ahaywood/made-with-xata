import type { Meta, StoryObj } from '@storybook/react';
import { ProjectGrid } from './ProjectGrid';
import { projects } from './ProjectGrid.mocks';

const meta: Meta<typeof ProjectGrid> = {
  title: 'Shared/ProjectGrid',
  component: ProjectGrid,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProjectGrid>;

export const Approved: Story = {
  args: {
    projects: projects as Project[],
  },
};

export const Unapproved: Story = {
  args: {
    projects: projects as Project[],
    isApproved: false,
  },
};
