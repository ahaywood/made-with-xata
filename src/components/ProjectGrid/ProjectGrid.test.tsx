import { render, screen } from '@testing-library/react';
import { ProjectGrid } from './ProjectGrid';
import { projects } from './ProjectGrid.mocks';

describe('ProjectGrid', () => {
  it.skip('renders correctly', () => {
    expect(() => {
      render(<ProjectGrid projects={projects} />);
    }).not.toThrow();
  });

  it.skip('renders the projects', () => {
    render(<ProjectGrid projects={projects} />);
    expect(screen.getByText(projects[0].name)).toBeInTheDocument();
  });

  it.skip('displays the approved projects heading', () => {
    render(<ProjectGrid projects={projects} />);
    expect(screen.getByText('Featured?')).toBeInTheDocument();
  });

  it.skip('displays the unapproved projects heading', () => {
    render(<ProjectGrid projects={projects} isApproved={false} />);
    expect(screen.getByText('Unapproved')).toBeInTheDocument();
  });
});
