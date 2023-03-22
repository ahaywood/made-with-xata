import { render, screen } from '@testing-library/react';
import { CONSTANTS } from '@/utils/Constants';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Footer />);
    }).not.toThrow();
  });

  it('displays the correct year', () => {
    jest.useFakeTimers().setSystemTime(new Date('2020-02-01'));
    render(<Footer />);
    expect(
      screen.getByText('Copyright © 2020. Xatabase, Inc. All rights reserved.')
    ).toBeInTheDocument();
  });

  it('links to the pricing page', () => {
    render(<Footer />);
    expect(screen.getByText('Pricing')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.PRICING
    );
  });

  it('links to the docs page', () => {
    render(<Footer />);
    expect(screen.getByText('Docs')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.DOCS
    );
  });

  it('links to the support page', () => {
    render(<Footer />);
    expect(screen.getByText('Support')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.SUPPORT
    );
  });

  it('links to the about us page', () => {
    render(<Footer />);
    expect(screen.getByText('About Us')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.ABOUT
    );
  });

  it('links to the blog page', () => {
    render(<Footer />);
    expect(screen.getByText('Blog')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.BLOG
    );
  });

  it('links to the careers page', () => {
    render(<Footer />);
    expect(screen.getByText('Careers')).toHaveAttribute(
      'href',
      CONSTANTS.NAV.CAREERS
    );
  });

  it('links to the cookies page', () => {
    render(<Footer />);
    expect(screen.getByText('Cookies')).toHaveAttribute(
      'href',
      CONSTANTS.LEGAL.COOKIES
    );
  });

  it('links to the terms page', () => {
    render(<Footer />);
    expect(screen.getByText('Terms')).toHaveAttribute(
      'href',
      CONSTANTS.LEGAL.TERMS
    );
  });

  it('links to the privacy policy page', () => {
    render(<Footer />);
    expect(screen.getByText('Privacy Policy')).toHaveAttribute(
      'href',
      CONSTANTS.LEGAL.PRIVACY_POLICY
    );
  });

  it('links to the correct email address', () => {
    render(<Footer />);
    expect(screen.getByTestId('footerEmail')).toHaveAttribute(
      'href',
      CONSTANTS.EMAIL
    );
  });

  it('links to the correct twitter address', () => {
    render(<Footer />);
    expect(screen.getByTestId('footerTwitter')).toHaveAttribute(
      'href',
      CONSTANTS.TWITTER
    );
  });

  it('links to the correct discord address', () => {
    render(<Footer />);
    expect(screen.getByTestId('footerDiscord')).toHaveAttribute(
      'href',
      CONSTANTS.DISCORD
    );
  });

  it('links to the correct linkedIn address', () => {
    render(<Footer />);
    expect(screen.getByTestId('footerLinkedIn')).toHaveAttribute(
      'href',
      CONSTANTS.LINKEDIN
    );
  });
});
