import { render, screen } from '@testing-library/react';
import { OnGitHub } from './OnGitHub';

describe('OnGitHub', () => {
  const href = 'https://www.google.com';

  it('renders correctly', () => {
    expect(() => {
      render(<OnGitHub href={href} />);
    }).not.toThrow();
  });

  // TODO: Fix broken test
  it('links to the right place', () => {
    render(<OnGitHub href={href} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });
});
