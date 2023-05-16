import type { Meta, StoryObj } from '@storybook/react';
import { ProjectForm } from './ProjectForm';

const meta: Meta<typeof ProjectForm> = {
  title: 'Admin/ProjectForm',
  component: ProjectForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProjectForm>;

export const Add: Story = {
  args: {
    state: 'add',
  },
};

export const Edit: Story = {
  args: {
    state: 'edit',
  },
};
