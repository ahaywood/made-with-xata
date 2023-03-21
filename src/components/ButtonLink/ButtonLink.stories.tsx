import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from './ButtonLink';

const meta: Meta<typeof ButtonLink> = {
  title: 'Shared/ButtonLink',
  component: ButtonLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonLink>;

export const ThickBorder: Story = {
  args: {
    borderWidth: 'thick',
    href: "#",
    isButterflyShowing: true,
    label: "Button Label"
  },
};

export const ThinBorder: Story = {
  args: {
    borderWidth: 'thin',
    href: "#",
    isButterflyShowing: true,
    label: "Button Label"
  },
};

export const NoButterfly: Story = {
  args: {
    borderWidth: 'thin',
    href: "#",
    isButterflyShowing: false,
    label: "Button Label"
  },
};