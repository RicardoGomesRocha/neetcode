import { DynamicArray } from './main.js';
import { data } from './tests.data';
describe('DesignDynamicArrayTestSuite', () => {
  // `it.each` Goes through every test case `it.each`
  it.each(data)('$name', ({ name, data, expectedResult }) => {
    let array;
    const resultData = [];

    // Goes thought every input data for each test case
    while (data.length > 0) {
      const command = data.shift();
      let parameters = [];

      if (command === 'Array' || command === 'pushback' || command === 'get')
        parameters = [...parameters, data.shift()];
      else if (command === 'set')
        parameters = [...parameters, data.shift(), data.shift()];

      if (command === 'Array') {
        array = new DynamicArray(...parameters);
        resultData.push(null);
      } else resultData.push(array[command](...parameters));
    }
    // Checks if the data retrieved by DynamicArray is the expected one
    expect(resultData).toEqual(expectedResult);
  });
});
