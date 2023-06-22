import { render, screen } from '@testing-library/react';
import { ProjectGrid } from './ProjectGrid';
import { projects } from './ProjectGrid.mocks';

describe('ProjectGrid', () => {
  const flatProjects = JSON.stringify(projects);

  it.skip('renders correctly', () => {
    expect(() => {
      render(<ProjectGrid xataData={flatProjects} />);
    }).not.toThrow();
  });

  it.skip('renders the projects', () => {
    render(<ProjectGrid xataData={flatProjects} />);
    const projectName = projects[0].name as string;
    expect(screen.getByText(projectName)).toBeInTheDocument();
  });

  it.skip('displays the approved projects heading', () => {
    render(<ProjectGrid xataData={flatProjects} />);
    expect(screen.getByText('Featured?')).toBeInTheDocument();
  });

  it.skip('displays the unapproved projects heading', () => {
    render(<ProjectGrid xataData={flatProjects} isApproved={false} />);
    expect(screen.getByText('Unapproved')).toBeInTheDocument();
  });
});
