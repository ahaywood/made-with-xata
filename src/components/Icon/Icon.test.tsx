import { render, screen } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Icon name="check" />);
    }).not.toThrow();
  });

  describe('Check Icon', () => {
    it('rendering the check icon', () => {
      render(<Icon name="check" />);
      expect(screen.getByTestId('checkIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="check" />);
      }).toMatchSnapshot();
    });
  });

  describe('Close Icon', () => {
    it('rendering the close icon', () => {
      render(<Icon name="close" />);
      expect(screen.getByTestId('closeIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="close" />);
      }).toMatchSnapshot();
    });
  });

  describe('Delete Icon', () => {
    it('rendering the delete icon', () => {
      render(<Icon name="delete" />);
      expect(screen.getByTestId('deleteIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="delete" />);
      }).toMatchSnapshot();
    });
  });

  describe('Discord Icon', () => {
    it('rendering the discord icon', () => {
      render(<Icon name="discord" />);
      expect(screen.getByTestId('discordIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="discord" />);
      }).toMatchSnapshot();
    });
  });

  describe('Dots Icon', () => {
    it('rendering the dots icon', () => {
      render(<Icon name="dots" />);
      expect(screen.getByTestId('dotsIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="dots" />);
      }).toMatchSnapshot();
    });
  });

  describe('Edit Icon', () => {
    it('rendering the edit icon', () => {
      render(<Icon name="edit" />);
      expect(screen.getByTestId('editIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="edit" />);
      }).toMatchSnapshot();
    });
  });

  describe('Email Icon', () => {
    it('rendering the email icon', () => {
      render(<Icon name="email" />);
      expect(screen.getByTestId('emailIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="email" />);
      }).toMatchSnapshot();
    });
  });

  describe('Filter Icon', () => {
    it('rendering the filter icon', () => {
      render(<Icon name="filter" />);
      expect(screen.getByTestId('filterIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="filter" />);
      }).toMatchSnapshot();
    });
  });

  describe('GitHub Icon', () => {
    it('rendering the github icon', () => {
      render(<Icon name="github" />);
      expect(screen.getByTestId('githubIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="github" />);
      }).toMatchSnapshot();
    });
  });

  describe('LinkedIn Icon', () => {
    it('rendering the linkedin icon', () => {
      render(<Icon name="linkedin" />);
      expect(screen.getByTestId('linkedinIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="linkedin" />);
      }).toMatchSnapshot();
    });
  });

  describe('Search Icon', () => {
    it('rendering the search icon', () => {
      render(<Icon name="search" />);
      expect(screen.getByTestId('searchIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="search" />);
      }).toMatchSnapshot();
    });
  });

  describe('Twitter Icon', () => {
    it('rendering the twitter icon', () => {
      render(<Icon name="twitter" />);
      expect(screen.getByTestId('twitterIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="twitter" />);
      }).toMatchSnapshot();
    });
  });

  describe('Upload Icon', () => {
    it('rendering the upload icon', () => {
      render(<Icon name="upload" />);
      expect(screen.getByTestId('uploadIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="upload" />);
      }).toMatchSnapshot();
    });
  });

  describe('Vertical Dots Icon', () => {
    it('rendering the vertical dots icon', () => {
      render(<Icon name="verticalDots" />);
      expect(screen.getByTestId('verticalDotsIcon')).toBeInTheDocument();
    });

    it('renders correctly', () => {
      expect(() => {
        render(<Icon name="verticalDots" />);
      }).toMatchSnapshot();
    });
  });
});
