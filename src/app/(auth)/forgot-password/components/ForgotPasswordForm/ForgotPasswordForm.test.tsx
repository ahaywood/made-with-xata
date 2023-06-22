import { render, screen } from '@testing-library/react'
import { ForgotPasswordForm } from './ForgotPasswordForm';

describe("ForgotPasswordForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <ForgotPasswordForm />)
    }).not.toThrow();
  });
});