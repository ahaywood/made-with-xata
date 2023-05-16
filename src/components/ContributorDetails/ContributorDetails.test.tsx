import { render, screen } from '@testing-library/react';
import { ContributorDetails } from './ContributorDetails';

describe('ContributorDetails', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<ContributorDetails />);
    }).not.toThrow();
  });
});

// TODO: Add additional tests
