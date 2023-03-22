import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Tag name="yolo" />);
    }).not.toThrow();
  });

  it('shows the correct label', () => {
    render(<Tag name="yolo" />);
    expect(screen.getByText('yolo')).toBeInTheDocument();
  });

  it('shows the close button', () => {
    render(<Tag name="yolo" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('hides the close button', () => {
    render(<Tag name="yolo" isXShowing={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('handles the close button click', async () => {
    const user = userEvent.setup();
    const handleClose = jest.fn();
    render(<Tag name="yolo" handleClose={handleClose} />);
    await user.click(screen.getByRole('button'));
    expect(handleClose).toHaveBeenCalled();
  });
});
