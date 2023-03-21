import { render, screen } from '@testing-library/react'
import { Butterfly } from './Butterfly';

describe("Butterfly", () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Butterfly />)
    }).not.toThrow();
  });

  it('matches the snapshot', () => {
    expect(render(<Butterfly />)).toMatchSnapshot();
  });
});