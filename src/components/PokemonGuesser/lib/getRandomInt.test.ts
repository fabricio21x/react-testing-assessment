import {getRandomInt} from './getRandomInt';

describe('sample test', () => {
  it('generates random int', () => {
    const rand = getRandomInt(300);
    expect(rand).toBeLessThanOrEqual(300);
  });
});
