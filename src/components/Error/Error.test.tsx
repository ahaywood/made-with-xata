import { render, screen } from '@testing-library/react';
import { Error } from './Error';

describe('Error', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Error message="This is an error message" />);
    }).not.toThrow();
  });

  it('displays the correct error message', () => {
    render(<Error message="This is an error message" />);
    const message = screen.getByText(/This is an error message/i);
    expect(message).toBeInTheDocument();
  });
});
