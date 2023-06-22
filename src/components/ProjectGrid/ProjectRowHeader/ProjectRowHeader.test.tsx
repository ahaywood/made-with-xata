import { render, screen } from '@testing-library/react'
import { ProjectRowHeader } from './ProjectRowHeader';

describe("ProjectRowHeader", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <ProjectRowHeader />)
    }).not.toThrow();
  });
});