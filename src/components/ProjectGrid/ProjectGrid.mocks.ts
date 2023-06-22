export const projects = [
  {
    id: '1',
    name: 'Prune Your Follows',
    isApproved: true,
    slug: 'some-slug',
    featured: true,
    contributor: {
      name: 'Lilly Labs',
      avatar: 'https://i.pravatar.cc/150?img=66',
      avatarColor: 'folly',
    },
    description: 'This is a description',
    additionalImages:
      'https://picsum.photos/seed/1686775703296/300/300.jpg, https://picsum.photos/seed/1686775723266/300/300.jpg',
    featuredImage: 'https://picsum.photos/seed/1686775733168/300/300.jpg',
    gitHubRepo: 'http://github.com',
    projectUrl: 'http://google.com',
    tags: ['Gatsby', 'Tailwind'],
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
    tags: ['Next.js', 'Tailwind'],
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
    tags: ['Remix', 'Styled Components'],
  },
] as Project[];
