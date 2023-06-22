import { render, screen } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('Error', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<ErrorMessage message="This is an error message" />);
    }).not.toThrow();
  });

  it('displays the correct error message', () => {
    render(<ErrorMessage message="This is an error message" />);
    const message = screen.getByText(/This is an error message/i);
    expect(message).toBeInTheDocument();
  });
});
