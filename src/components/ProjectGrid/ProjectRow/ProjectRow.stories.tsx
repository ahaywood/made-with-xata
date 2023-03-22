import type { Meta, StoryObj } from '@storybook/react';
import { ProjectRow } from './ProjectRow';

const meta: Meta<typeof ProjectRow> = {
  title: 'Shared/ProjectRow',
  component: ProjectRow,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/7.0/react/writing-docs/docs-page
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/7.0/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ProjectRow>;

export const Primary: Story = {
  args: {
    project: {
      id: '1',
      isApproved: true,
      featured: true,
      slug: 'some-slug',
      name: 'Prune Your Follows',
      contributor: {
        name: 'Lilly Labs',
        avatar: 'https://i.pravatar.cc/150?img=66',
        avatarColor: 'folly',
      },
      tags: [
        { id: '1', name: 'Gatsby' },
        { id: '2', name: 'Tailwind' },
      ],
    },
    handleEdit: () => {},
    handleDelete: () => {},
  },
};

export const NotFeatured: Story = {
  args: {
    project: {
      id: '1',
      isApproved: true,
      featured: false,
      slug: 'some-slug',
      name: 'Prune Your Follows',
      contributor: {
        name: 'Lilly Labs',
        avatar: 'https://i.pravatar.cc/150?img=66',
        avatarColor: 'folly',
      },
      tags: [
        { id: '1', name: 'Gatsby' },
        { id: '2', name: 'Tailwind' },
      ],
    },
    handleEdit: () => {},
    handleDelete: () => {},
  },
};

export const NoTags: Story = {
  args: {
    project: {
      id: '1',
      isApproved: true,
      tags: [],
      featured: false,
      slug: 'some-slug',
      name: 'Prune Your Follows',
      contributor: {
        name: 'Lilly Labs',
        avatar: 'https://i.pravatar.cc/150?img=66',
        avatarColor: 'folly',
      },
    },
    handleEdit: () => {},
    handleDelete: () => {},
  },
};

export const ExtraTags: Story = {
  args: {
    project: {
      featured: false,
      id: '1',
      isApproved: true,
      slug: 'some-slug',
      name: 'Prune Your Follows',
      contributor: {
        name: 'Lilly Labs',
        avatar: 'https://i.pravatar.cc/150?img=66',
        avatarColor: 'folly',
      },
      tags: [
        { id: '1', name: 'Gatsby' },
        { id: '2', name: 'Tailwind' },
        { id: '3', name: 'Next.js' },
        { id: '3', name: 'Remix' },
      ],
    },
    handleEdit: () => {},
    handleDelete: () => {},
  },
};

export const Unapproved: Story = {
  args: {
    project: {
      featured: false,
      slug: 'some-slug',
      name: 'Prune Your Follows',
      id: '1',
      contributor: {
        name: 'Lilly Labs',
        avatar: 'https://i.pravatar.cc/150?img=66',
        avatarColor: 'folly',
      },
      isApproved: false,
      tags: [
        { id: '1', name: 'Gatsby' },
        { id: '2', name: 'Tailwind' },
        { id: '3', name: 'Next.js' },
        { id: '3', name: 'Remix' },
      ],
    },
    handleEdit: () => {},
    handleDelete: () => {},
  },
};
