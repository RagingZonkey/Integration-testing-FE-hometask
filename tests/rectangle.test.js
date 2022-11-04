const {getRectangleArea, getRectanglePerimeter, getRectangleInfo} = require('../js/rectangle');

test('calculates the perimeter of a rectangle with the sides of 4 and 5', () => {
  const calculationResult = getRectanglePerimeter(4, 5);
  expect(calculationResult).toBe(18);
});

test('calculates the area of a rectangle with the sides of 4 and 5', () => {
  const calculationResult = getRectangleArea(4, 5);
  expect(calculationResult).toBe(20);
});

test('calculates the area and the perimeter of a rectangle with the sides ' +
'of 4 and 5 and outputs them', () => {
  // Create a mock function to track console.log() calls
  const consoleSpy = jest.spyOn(console, 'log');
  getRectangleInfo(4, 5);

  // Use a method to ensure console.log() has been called with
  // the expected output
  expect(consoleSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 18 and the area is 20');
});
