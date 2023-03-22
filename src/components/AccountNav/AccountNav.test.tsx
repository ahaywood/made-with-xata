import { render, screen } from '@testing-library/react';
import { AccountNav } from './AccountNav';
import { user } from './AccountNav.mocks';

describe('AccountNav', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<AccountNav user={user} />);
    }).not.toThrow();
  });

  it('renders the user name', () => {
    render(<AccountNav user={user} />);
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});
