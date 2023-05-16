import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import { project } from './Card.mocks';

describe('Card', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Card project={project} />);
    }).not.toThrow();
  });

  it('shows the project title', () => {
    render(<Card project={project} />);
    expect(screen.getByText(project.name)).toBeInTheDocument();
  });

  it('shows the project description', () => {
    render(<Card project={project} />);
    expect(screen.getByText(project.description)).toBeInTheDocument();
  });

  it('links to the project details page', () => {
    render(<Card project={project} />);
    expect(screen.getByTestId('buttonLink')).toHaveAttribute(
      'href',
      `/${project.slug}`
    );
  });

  // TODO: Add GitHub Repo variable to the card
  it('links to the correct GitHub repo', () => {
    render(<Card project={project} />);
    expect(screen.getByTestId('onGitHubLink')).toHaveAttribute(
      'href',
      project.gitHubRepo
    );
  });

  it('shows the featured image', () => {
    render(<Card project={project} />);
    expect(
      screen.getByAltText(`${project.name} featured screenshot`)
    ).toHaveAttribute('src', project.featuredImage);
  });

  it.skip('shows the first screenshot', () => {
    render(<Card project={project} />);
    expect(
      screen.getByAltText(`${project.name} first screenshot`)
    ).toHaveAttribute('src', project.additionalImages[0]);
  });
});
