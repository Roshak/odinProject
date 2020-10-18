const leapYears = require('./leapYears')

describe('leapYears', function() {
  it('works with non century years 1996', function() {
    expect(leapYears(1996)).toEqual(true);
  });
  it('works with non century years 1997', function() {
    expect(leapYears(1997)).toEqual(false);
  });
  it('works with ridiculously futuristic non century years 34992', function() {
    expect(leapYears(34992)).toEqual(true);
  });
  it('works with century years 1900', function() {
    expect(leapYears(1900)).toEqual(false);
  });
  it('works with century years 1600', function() {
    expect(leapYears(1600)).toEqual(true);
  });
  it('works with century years 700', function() {
    expect(leapYears(700)).toEqual(false);
  });
});
