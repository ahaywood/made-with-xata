import { render, screen } from '@testing-library/react';
import { Tags } from './Tags';

describe('Tags', () => {
  it('renders correctly', () => {
    expect(() => {
      render(<Tags onChange={() => {}} />);
    }).not.toThrow();
  });

  // TODO: Finish writing tests
  it.skip('defaults to no tags', () => {
    render(<Tags onChange={() => {}} />);
  });

  it.skip('defaults to the tags passed in', () => {});

  it.skip('adds a tag after you hit a comma', () => {});
  it.skip('removes a tag when you click on the x button', () => {});
  it.skip('removes a tag when you hit the delete button', () => {
    // this is working fine when you have one tag and remove it.
    // but when you have multiple tags, it's not working.
    // when you get down to the first tag, it adds the content into the input
    // instead of removing it
  });
});

// TODO: Write tests
