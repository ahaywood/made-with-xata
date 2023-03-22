import { render, screen } from '@testing-library/react'
import { Logo } from './Logo';

describe("Logo", () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Logo />)
    }).not.toThrow();
  });

  it('matches the snapshot', () => {
    expect(render(<Logo />)).toMatchSnapshot();
  });
});