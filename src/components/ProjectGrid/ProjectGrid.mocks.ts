export const projects = [
  {
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
  {
    id: '2',
    isApproved: true,
    featured: true,
    slug: 'made-with-xata',
    name: 'Made with Xata',
    contributor: {
      name: 'Amy Dutton',
      avatar: 'https://i.pravatar.cc/150?img=65',
      avatarColor: 'folly',
    },
    tags: [
      { id: '1', name: 'Next.js' },
      { id: '2', name: 'Tailwind' },
    ],
  },
  {
    id: '3',
    isApproved: true,
    featured: false,
    slug: 'search-retro-games',
    name: 'Search Retro Games',
    contributor: {
      name: 'Sara Walker',
      avatar: 'https://i.pravatar.cc/150?img=64',
      avatarColor: 'folly',
    },
    tags: [
      { id: '1', name: 'Remix' },
      { id: '2', name: 'Styled Components' },
    ],
  },
] as Project[];
