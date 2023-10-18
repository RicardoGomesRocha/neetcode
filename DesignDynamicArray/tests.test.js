import { DynamicArray } from './main.js';
import { data } from './tests.data';
describe('DesignDynamicArrayTestSuite', () => {
  it.each(data)('$name', ({ name, data, expectedResult }) => {
    let array;
    const resultData = [];
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

    expect(resultData).toEqual(expectedResult);
  });
});
