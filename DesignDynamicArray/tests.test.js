import { DynamicArray } from './main.js';
import { data } from './tests.data';
describe('DesignDynamicArrayTestSuite', () => {
  it.each(data)('$name', ({ name, data, expectedResult }) => {
    let array;
    const resultData = [];
    while (data.length > 0) {
      const command = data.shift();
      let parameter;

      if (command === 'Array' || command === 'pushback' || command === 'get') {
        parameter = data.shift();
      }

      if (command === 'Array') {
        array = new DynamicArray(parameter);
        resultData.push(null);
      } else resultData.push(array[command](parameter));
    }

    expect(resultData).toEqual(expectedResult);
  });
});
