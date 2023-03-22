import { render, screen } from '@testing-library/react'
import { ProjectGrid } from './ProjectGrid';

describe("ProjectGrid", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <ProjectGrid />)
    }).not.toThrow();
  });
});