import { render, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Toggle onChange={() => {}} id="yolo" />);
    }).not.toThrow();
  });

  it('displays the label correctly', () => {
    render(<Toggle onChange={() => {}} id="yolo" label="my label" />);
    expect(screen.getByText('my label')).toBeInTheDocument();
  });

  it('it defaults to off', () => {
    render(<Toggle onChange={() => {}} id="yolo" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('it defaults to on', () => {
    render(<Toggle onChange={() => {}} id="yolo" value />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('it toggles on and off', () => {
    render(<Toggle onChange={() => {}} id="yolo" label="my label" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    screen.getByLabelText('my label').click();
    expect(screen.getByRole('checkbox')).toBeChecked();
  });
});
