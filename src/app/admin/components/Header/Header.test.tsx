import { act, render, screen, waitFor } from '@testing-library/react';
import { Header } from './Header';
import { user } from './Header.mocks';

describe('Header', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Header user={user} />);
    }).not.toThrow();
  });

  it('clicking on the Add Project button opens the modal', () => {
    render(<Header user={user} />);
    const button = screen.getByRole('button');
    expect(screen.queryByTestId('slideOutPanel')).not.toBeInTheDocument();
    act(() => {
      button.click();
    });
    waitFor(() =>
      expect(screen.getByTestId('slideOutPanel')).toBeInTheDocument()
    );
  });
});
