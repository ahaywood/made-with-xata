import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Footer />);
    }).not.toThrow();
  });
});
