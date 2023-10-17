export class DynamicArray {
  /**
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.array = [];
  }

  /**
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    if (!checkValidPosition(i)) return false;
    return this.array[i];
  }

  /**
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (!checkValidPosition(i)) return null;
    this.array[i] = n;
  }

  /**
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.array.length === capacity - 1) this.resize();

    const position = this.array.findIndex((value) => value === n);
    if (position === -1) return null;
    this.array[position] = this.array[this.capacity - 1];
    this.array[this.capacity - 1] = n;
  }

  /**
   * @returns {number}
   */
  popback() {
    return this.array.pop() || null;
  }

  /**
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
  }

  /**
   * @returns {number}
   */
  getSize() {
    let numberOfElements = 0;

    for (const element in this.array)
      if (element !== null || element !== undefined) numberOfElements++;

    return numberOfElements;
  }

  /**
   * @returns {number}
   */
  getCapacity() {
    return this.capacity;
  }

  checkValidPosition(i) {
    if (i >= this.capacity) return false;
    return true;
  }
}
