import { render, screen } from '@testing-library/react';
import { LoggedInBar } from './LoggedInBar';
import { user } from './LoggedInBar.mocks';

describe('LoggedInBar', () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <LoggedInBar
          user={user}
          buttonLabel="Edit"
          buttonLink="https://www.google.com"
        />
      );
    }).not.toThrow();
  });

  it('shows the correct button label', () => {
    render(
      <LoggedInBar
        user={user}
        buttonLabel="Edit"
        buttonLink="https://www.google.com"
      />
    );
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('shows the Manage Projects link', () => {
    render(
      <LoggedInBar
        user={user}
        buttonLabel="Edit"
        buttonLink="https://www.google.com"
      />
    );
    expect(screen.getByText('Manage Projects')).toHaveAttribute(
      'href',
      '/admin'
    );
  });
});
