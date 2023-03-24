import { render, screen } from '@testing-library/react'
import { MobileDevice } from './MobileDevice';

describe("MobileDevice", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <MobileDevice />)
    }).not.toThrow();
  });
});