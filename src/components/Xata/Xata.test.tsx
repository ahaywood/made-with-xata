import { render } from '@testing-library/react';
import { Xata } from './Xata';

describe('Xata', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Xata />);
    }).not.toThrow();
  });

  it('matches the snapshot', () => {
    expect(render(<Xata />)).toMatchSnapshot();
  });
});
