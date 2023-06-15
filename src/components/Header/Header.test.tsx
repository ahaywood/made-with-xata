import { render, screen } from '@testing-library/react';
import { CONSTANTS } from '@/utils/Constants';
import { Header } from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Header />);
    }).not.toThrow();
  });

  it('the logo goes to the home page', () => {
    render(<Header />);
    const logo = screen.getByTestId('homeLink');
    expect(logo).toHaveAttribute('href', CONSTANTS.NAV.HOME);
  });

  it('the features link goes to the features page on Xata', () => {
    render(<Header />);
    const featuresLink = screen.getByText('All Projects');
    expect(featuresLink).toHaveAttribute('href', CONSTANTS.NAV.GALLERY);
  });

  it.skip('the features link goes to the features page on Xata', () => {
    render(<Header />);
    const featuresLink = screen.getByText('Features');
    expect(featuresLink).toHaveAttribute('href', CONSTANTS.NAV.FEATURES);
  });

  it.skip('the pricing link goes to the pricing page on Xata', () => {
    render(<Header />);
    const pricingLink = screen.getByText('Pricing');
    expect(pricingLink).toHaveAttribute('href', CONSTANTS.NAV.PRICING);
  });

  it.skip('the blog link goes to the blog page on Xata', () => {
    render(<Header />);
    const blogLink = screen.getByText('Blog');
    expect(blogLink).toHaveAttribute('href', CONSTANTS.NAV.BLOG);
  });

  it.skip('the docs link goes to the docs page on Xata', () => {
    render(<Header />);
    const docsLink = screen.getByText('Docs');
    expect(docsLink).toHaveAttribute('href', CONSTANTS.NAV.DOCS);
  });

  it.skip('the ai link goes to the ai page on Xata', () => {
    render(<Header />);
    const aiLinks = screen.getByText('AI');
    expect(aiLinks).toHaveAttribute('href', CONSTANTS.NAV.AI);
  });

  it('the login link goes to the login page on Xata', () => {
    render(<Header />);
    const loginLinks = screen.getByText('Login');
    expect(loginLinks).toHaveAttribute('href', CONSTANTS.NAV.LOGIN);
  });
});
