import { render, screen } from '@testing-library/react'
import { UserRowHeader } from './UserRowHeader';

describe("UserRowHeader", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <UserRowHeader />)
    }).not.toThrow();
  });
});