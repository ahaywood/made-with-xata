import { render, screen } from '@testing-library/react';
import { ButtonLink } from './ButtonLink';

describe('ButtonLink', () => {
  const href = 'https://www.google.com';
  const label = 'Google';

  it('renders correctly', () => {
    expect(() => {
      render(<ButtonLink href={href} label={label} />);
    }).not.toThrow();
  });

  it('shows the correct label', () => {
    render(<ButtonLink href={href} label={label} />);
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('links to the right place', () => {
    render(<ButtonLink href={href} label={label} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', href);
  });

  it('displays a thick border', () => {
    render(<ButtonLink href={href} label={label} borderWidth="thick" />);
    expect(screen.getByTestId('border')).toHaveClass('p-[6px]', {
      exact: false,
    });
  });

  it('displays a thin border', () => {
    render(<ButtonLink href={href} label={label} borderWidth="thin" />);
    expect(screen.getByTestId('border')).toHaveClass('p-[2px]', {
      exact: false,
    });
  });

  it('shows the butterfly', () => {
    render(<ButtonLink href={href} label={label} isButterflyShowing />);
    expect(screen.getByTestId('butterfly')).toBeInTheDocument();
  });

  it('does not show the butterfly', () => {
    render(<ButtonLink href={href} label={label} isButterflyShowing={false} />);
    expect(screen.queryByTestId('butterfly')).not.toBeInTheDocument();
  });
});
