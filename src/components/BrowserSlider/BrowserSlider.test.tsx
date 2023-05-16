import { render, screen } from '@testing-library/react';
import { BrowserSlider } from './BrowserSlider';

describe('BrowserSlider', () => {
  it.skip('renders correctly', () => {
    expect(() => {
      render(<BrowserSlider slides={[]} />);
    }).not.toThrow();
  });
});

// TODO: Add Tests for the Project Slider
