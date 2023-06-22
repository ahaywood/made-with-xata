import { render, screen } from '@testing-library/react'
import { AccountForm } from './AccountForm';

describe("AccountForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <AccountForm />)
    }).not.toThrow();
  });
});