import { render } from '@testing-library/react';
import { ContributorDetails } from './ContributorDetails';
import { contributor } from './ContributorDetails.mocks';

describe('ContributorDetails', () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <ContributorDetails
          contributor={contributor}
          githubRepo="http://github.com"
        />
      );
    }).not.toThrow();
  });

  it.skip('renders the contributor name', () => {});
  it.skip('renders the contributor avatar', () => {});
});

// TODO: Add additional tests
