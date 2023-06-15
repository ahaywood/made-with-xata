import { randomAvatarColor } from './Colors';

describe('Colors', () => {
  it('returns a random color', () => {
    const expectedKeys = [
      'alienArmpit',
      'malachite',
      'munsellGreen',
      'tiffanyBlue',
      'irisBlue',
      'vividCerulean',
      'blueDeFrance',
      'veryLightBlue',
      'lavenderBlue',
      'lavender',
      'phlox',
      'fluorescentPink',
      'folly',
    ];
    const color = randomAvatarColor();
    expect(expectedKeys).toContain(color);
  });
});
