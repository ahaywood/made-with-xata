import { render, screen } from '@testing-library/react'
import { UserGrid } from './UserGrid';

describe("UserGrid", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <UserGrid />)
    }).not.toThrow();
  });
});