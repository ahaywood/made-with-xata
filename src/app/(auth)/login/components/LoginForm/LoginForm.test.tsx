import { render, screen } from '@testing-library/react'
import { LoginForm } from './LoginForm';

describe("LoginForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <LoginForm />)
    }).not.toThrow();
  });
});