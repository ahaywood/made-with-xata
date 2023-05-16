import { render, screen } from '@testing-library/react';
import { Upload } from './Upload';

describe('Upload', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Upload />);
    }).not.toThrow();
  });
});

// TODO: Write tests
