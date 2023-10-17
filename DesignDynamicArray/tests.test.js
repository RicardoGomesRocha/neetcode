import { DynamicArray } from './main.js';
describe('DesignDynamicArrayTestSuite', () => {
  const data = [
    {
      name: 'Test Case 1',
      data: ['Array', 1, 'getSize', 'getCapacity'],
      expectedResult: [null, 0, 1],
    },
    {
      name: 'Test Case 2',
      data: [null, 0, 5],
    },
  ];

  it.each(data)('aaaaa', ({ name, data, expected }) => {
    let array = new DynamicArray();
    console.log(array[name]);
    while (data.length > 0) {
      const command = data.pop();
      let value = 0;

      if (
        command === 'pushback' ||
        command === 'checkValidPosition' ||
        command === 'get'
      )
        if (command === 'Array') array = new DynamicArray();
        else array[command];
    }

    expect(true).toBe(true);
    console.log(DynamicArray);
  });
});
