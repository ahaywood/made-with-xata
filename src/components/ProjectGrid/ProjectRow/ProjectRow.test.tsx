'use client';

import { render, screen } from '@testing-library/react';
import { ProjectRow } from './ProjectRow';

describe('ProjectRow', () => {
  const project = {
    featured: false,
    slug: 'something',
    name: 'This is it',
    contributor: {
      avatar: 'https://i.pravatar.cc/150?img=66',
      name: 'Amy',
    },
    isApproved: true,
  } as Project;

  it('renders correctly', () => {
    expect(() => {
      render(<ProjectRow project={project} deleteProject={() => {}} />);
    }).not.toThrow();
  });

  it.skip('handles a click and drag', () => {});

  it('displays as a featured component', () => {
    render(
      <ProjectRow
        project={{ ...project, featured: true }}
        deleteProject={() => {}}
      />
    );
    expect(screen.getByTestId('checkIcon')).toBeInTheDocument();
  });

  it('does not display as a featured component', () => {
    render(<ProjectRow project={project} deleteProject={() => {}} />);
    expect(screen.queryByTestId('checkIcon')).not.toBeInTheDocument();
  });

  it('displays the project name', () => {
    render(<ProjectRow project={project} deleteProject={() => {}} />);
    expect(screen.getByText('This is it')).toBeInTheDocument();
  });

  it('links to the individual project', () => {
    render(<ProjectRow project={project} deleteProject={() => {}} />);
    expect(screen.getByText('This is it').closest('a')).toHaveAttribute(
      'href',
      '/something'
    );
  });

  it('displays the contributor', () => {
    render(<ProjectRow project={project} deleteProject={() => {}} />);
    expect(screen.getByText('Amy')).toBeInTheDocument();
  });

  it.skip('displays the tags', () => {
    render(
      <ProjectRow
        deleteProject={() => {}}
        project={{
          ...project,
          tags: ['Gatsby', 'Tailwind'],
        }}
      />
    );
    expect(screen.getByText('Gatsby')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('is approved', () => {
    render(<ProjectRow project={project} deleteProject={() => {}} />);
    expect(screen.getByText('This is it')).not.toHaveClass('italic');
    expect(screen.getByText('This is it')).not.toHaveClass('text-gray');
    expect(screen.getByText('Amy')).not.toHaveClass('italic');
    expect(screen.getByText('Amy')).not.toHaveClass('text-gray');
  });

  it.skip('is not approved', () => {
    render(
      <ProjectRow
        project={{ ...project, isApproved: false }}
        deleteProject={() => {}}
      />
    );
    expect(screen.getByText('This is it')).toHaveClass('italic', {
      exact: false,
    });
    expect(screen.getByText('This is it')).toHaveClass('text-gray', {
      exact: false,
    });
    expect(screen.getByText('Amy')).toHaveClass('italic', { exact: false });
    expect(screen.getByText('Amy')).toHaveClass('text-gray', { exact: false });
  });
});
