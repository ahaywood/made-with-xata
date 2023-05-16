import { render, screen } from '@testing-library/react';
import { Submit } from './Submit';

describe('Submit', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Submit />);
    }).not.toThrow();
  });
});

// TODO: Write tests
