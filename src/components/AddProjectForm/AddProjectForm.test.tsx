import { render, screen } from '@testing-library/react'
import { AddProjectForm } from './AddProjectForm';

describe("AddProjectForm", () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <AddProjectForm />)
    }).not.toThrow();
  });
});