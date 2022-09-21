import {getRandomInt} from './getRandomInt';

describe('getRandomInt test', () => {
  it('generated value between 0 and max', () => {
    const rand = getRandomInt(300);
    expect(rand).toBeLessThan(300);
    expect(rand).toBeGreaterThanOrEqual(0);
  });
});
