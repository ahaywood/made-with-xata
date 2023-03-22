import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
      render(
        <ProjectRow
          project={project}
          handleEdit={() => {}}
          handleDelete={() => {}}
        />
      );
    }).not.toThrow();
  });

  it.skip('handles a click and drag', () => {});

  it('displays as a featured component', () => {
    render(
      <ProjectRow
        project={{
          ...project,
          featured: true,
        }}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByTestId('checkIcon')).toBeInTheDocument();
  });

  it('does not display as a featured component', () => {
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.queryByTestId('checkIcon')).not.toBeInTheDocument();
  });

  it('displays the project name', () => {
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('This is it')).toBeInTheDocument();
  });

  it('links to the individual project', () => {
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('This is it').closest('a')).toHaveAttribute(
      'href',
      '/something'
    );
  });

  it('displays the contributor', () => {
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('Amy')).toBeInTheDocument();
  });

  it('displays the tags', () => {
    render(
      <ProjectRow
        project={{
          ...project,
          tags: [
            { id: '1', name: 'Gatsby' },
            { id: '2', name: 'Tailwind' },
          ],
        }}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('Gatsby')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('handles the edit button click', async () => {
    const user = userEvent.setup();
    const handleEdit = jest.fn();
    render(
      <ProjectRow
        project={project}
        handleEdit={handleEdit}
        handleDelete={() => {}}
      />
    );
    await waitFor(() => user.click(screen.getByTestId('editProject')));
    expect(handleEdit).toHaveBeenCalled();
  });

  it('handles the delete button click', async () => {
    const user = userEvent.setup();
    const handleDelete = jest.fn();
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={handleDelete}
      />
    );
    await waitFor(() => user.click(screen.getByTestId('deleteProject')));
    expect(handleDelete).toHaveBeenCalled();
  });

  it('is approved', () => {
    render(
      <ProjectRow
        project={project}
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('This is it')).not.toHaveClass('italic');
    expect(screen.getByText('This is it')).not.toHaveClass('text-gray');
    expect(screen.getByText('Amy')).not.toHaveClass('italic');
    expect(screen.getByText('Amy')).not.toHaveClass('text-gray');
  });

  it('is not approved', () => {
    render(
      <ProjectRow
        project={{ ...project, isApproved: false }}
        handleEdit={() => {}}
        handleDelete={() => {}}
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
