import { slugify } from './Slugify';

describe('Slug', () => {
  it('takes a string and converts it to a slug', () => {
    const result = slugify('Hello World');
    expect(result).toEqual('hello-world');
  });
});
