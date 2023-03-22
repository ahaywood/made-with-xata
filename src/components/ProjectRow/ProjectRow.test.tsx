import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ProjectRow } from './ProjectRow';

describe('ProjectRow', () => {
  it('renders correctly', () => {
    expect(() => {
      render(
        <ProjectRow
          featured={false}
          slug="something"
          name="This is it"
          avatar="https://i.pravatar.cc/150?img=66"
          contributor="Amy"
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
        featured
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByTestId('checkIcon')).toBeInTheDocument();
  });

  it('does not display as a featured component', () => {
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.queryByTestId('checkIcon')).not.toBeInTheDocument();
  });

  it('displays the project name', () => {
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('This is it')).toBeInTheDocument();
  });

  it('links to the individual project', () => {
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
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
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={() => {}}
      />
    );
    expect(screen.getByText('Amy')).toBeInTheDocument();
  });

  it('displays the tags', () => {
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        tags={[
          { id: '1', name: 'Gatsby' },
          { id: '2', name: 'Tailwind' },
        ]}
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
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={handleEdit}
        handleDelete={() => {}}
      />
    );
    await user.click(screen.getByTestId('editProject'));
    expect(handleEdit).toHaveBeenCalled();
  });

  it('handles the delete button click', async () => {
    const user = userEvent.setup();
    const handleDelete = jest.fn();
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={handleDelete}
      />
    );
    await user.click(screen.getByTestId('deleteProject'));
    expect(handleDelete).toHaveBeenCalled();
  });

  it('is approved', () => {
    render(
      <ProjectRow
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
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
        featured={false}
        slug="something"
        name="This is it"
        avatar="https://i.pravatar.cc/150?img=66"
        contributor="Amy"
        handleEdit={() => {}}
        handleDelete={() => {}}
        isApproved={false}
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
