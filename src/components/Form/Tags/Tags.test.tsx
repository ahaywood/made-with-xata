import { render, screen } from '@testing-library/react';
import { Tags } from './Tags';

describe('Tags', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Tags />);
    }).not.toThrow();
  });
});

// TODO: Write tests
