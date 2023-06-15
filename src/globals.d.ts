interface Contributor {
  id?: string;
  name: string;
  avatar?: string;
  avatarColor?: ThemeColors;
}

interface Project {
  id?: string;
  name?: string;
  isApproved?: boolean;
  slug?: string;
  featured?: boolean;
  contributor?: Contributor;
  description?: string;
  additionalImages?: string;
  featuredImage?: string;
  featuredOnHomepage?: boolean;
  featuredInCarousel?: boolean;
  gitHubRepo?: string;
  tags?: string[];
  projectUrl?: string;
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
  name?: string;
  email: string;
  avatar?: string;
  avatarColor?: ThemeColors;
  password?: string;
}
