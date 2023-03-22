interface Project {
  id: string;
  name: string;
  isApproved: boolean;
  slug: string;
  featured: boolean;
  contributor: {
    name: string;
    avatar: string;
    avatarColor: ThemeColors;
  };
  tags: Tag[];
}

interface Tag {
  name: string;
  id: string;
}

type ThemeColors =
  | 'alienArmpit'
  | 'malachite'
  | 'munsellGreen'
  | 'tiffanyBlue'
  | 'irisBlue'
  | 'vividCerulean'
  | 'blueDeFrance'
  | 'veryLightBlue'
  | 'lavenderBlue'
  | 'lavender'
  | 'phlox'
  | 'fluorescentPink'
  | 'folly';

interface User {
  name: string;
  avatar: string;
  avatarColor: ThemeColors;
}
