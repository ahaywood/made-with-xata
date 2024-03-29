import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Shared/Toggle',
  component: Toggle,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof Toggle>;
export const Checked: Story = {
  args: {
    value: false,
    id: 'yolo',
    onChange: () => {},
    label: 'Yolo',
  },
};

export const Unchecked: Story = {
  args: {
    value: true,
    id: 'yolo',
    onChange: () => {},
    label: 'Yolo',
  },
};
