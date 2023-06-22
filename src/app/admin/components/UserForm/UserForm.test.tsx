import { render, screen } from '@testing-library/react'
import { UserForm } from './UserForm';

describe("UserForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <UserForm />)
    }).not.toThrow();
  });
});