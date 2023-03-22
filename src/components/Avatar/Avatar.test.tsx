import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar';

describe("Avatar", () => {
  const alt = "Some Alt Text"
  const src = "https://i.pravatar.cc/150?img=66"

  it('renders correctly', () => {
    expect(() => {
      render(
        <Avatar alt={alt} src={src} />)
    }).not.toThrow();
  });

  it('renders at the correct size', () => {
    render(<Avatar alt={alt} src={src} size={48} />);
    expect(screen.getByRole('img')).toHaveAttribute('height', '48');
    expect(screen.getByRole('img')).toHaveAttribute('width', '48');
  })
});