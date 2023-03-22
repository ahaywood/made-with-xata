import type { Meta, StoryObj } from '@storybook/react';
import { SlideOutPanel } from './SlideOutPanel';

const meta: Meta<typeof SlideOutPanel> = {
  title: 'Shared/SlideOutPanel',
  component: SlideOutPanel,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SlideOutPanel>;

export const Hidden: Story = {
  args: {
    children: <div>Slide out panel content</div>,
    defaultIsShowing: false,
  },
};

export const Showing: Story = {
  args: {
    children: <div>Slide out panel content</div>,
    defaultIsShowing: true,
  },
};
