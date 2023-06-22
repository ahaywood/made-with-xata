import { render, screen } from '@testing-library/react'
import { UserRow } from './UserRow';

describe("UserRow", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <UserRow />)
    }).not.toThrow();
  });
});