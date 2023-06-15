import { currentYear } from './DateHelpers';

describe('DateHelpers', () => {
  it('renders the current year', () => {
    // mock the global date
    jest.useFakeTimers().setSystemTime(new Date('2020-02-15'));
    const year = currentYear();
    expect(year).toEqual(2020);
    jest.useRealTimers();
  });
});
