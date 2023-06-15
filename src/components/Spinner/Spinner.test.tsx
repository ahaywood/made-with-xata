import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Spinner />);
    }).not.toThrow();
  });

  it('renders the correct size', () => {
    render(<Spinner size={100} />);
    expect(screen.getByTestId('spinner')).toHaveStyle({
      height: '100px',
      width: '100px',
    });
  });
});
