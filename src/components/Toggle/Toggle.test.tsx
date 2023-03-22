import { render, screen } from '@testing-library/react'
import { Toggle } from './Toggle';

describe("Toggle", () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Toggle name="yolo" />)
    }).not.toThrow();
  });

  it('displays the label correctly', () => {
    render(<Toggle name="yolo" label="my label" />)
    expect(screen.getByText('my label')).toBeInTheDocument();
  })

  it('it defaults to off', () => {
    render(<Toggle name="yolo" />)
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  })

  it('it defaults to on', () => {
    render(<Toggle name="yolo" defaultChecked={true} />)
    expect(screen.getByRole('checkbox')).toBeChecked();
  })

  it('it toggles on and off', () => {
    render(<Toggle name="yolo" label={'my label'} />)
    expect(screen.getByRole('checkbox')).not.toBeChecked();
    screen.getByLabelText('my label').click();
    expect(screen.getByRole('checkbox')).toBeChecked();
  })
});