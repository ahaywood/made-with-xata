import { render, screen } from '@testing-library/react';
import { ProjectForm } from './ProjectForm';

describe('ProjectForm', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<ProjectForm />);
    }).not.toThrow();
  });
});
