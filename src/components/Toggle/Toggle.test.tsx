import { render, screen, waitFor } from '@testing-library/react'
import { Toggle } from './Toggle';

describe("Toggle", () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Toggle name="yolo" />)
    }).not.toThrow();
  });

  it.skip('displays the label correctly', () => { })
  it.skip('it defaults to off', () => { })
  it.skip('it defaults to on', () => { })
  it.skip('it toggles on and off', () => { })
});