import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Shared/Icon',
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Check: Story = {
  args: {
    name: 'Check',
  },
};

export const Close: Story = {
  args: {
    name: 'Close',
  },
};

export const Delete: Story = {
  args: {
    name: 'Delete',
  },
};

export const Dots: Story = {
  args: {
    name: 'Dots',
  },
};

export const Edit: Story = {
  args: {
    name: 'Edit',
  },
};

export const Email: Story = {
  args: {
    name: 'Email',
  },
};

export const Github: Story = {
  args: {
    name: 'Github',
  },
};

export const Hazard: Story = {
  args: {
    name: 'Hazard',
  },
};

export const LinkedIn: Story = {
  args: {
    name: 'LinkedIn',
  },
};

export const Upload: Story = {
  args: {
    name: 'Upload',
  },
};

export const VerticalDots: Story = {
  args: {
    name: 'VerticalDots',
  },
};
