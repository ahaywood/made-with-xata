import { render } from '@testing-library/react';
import { ProjectGrid } from './ProjectGrid';
import { projects } from './ProjectGrid.mocks';

describe('ProjectGrid', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<ProjectGrid projects={projects as Project[]} />);
    }).not.toThrow();
  });

  // it('renders the projects', () => {
  //   render(<ProjectGrid projects={projects as Project[]} />);
  //   expect(screen.getByText(projects[0].name)).toBeInTheDocument();
  // });
});
