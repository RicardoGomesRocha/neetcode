export class DynamicArray {
  /**
   * Initialize an empty array with a capacity of capacity, where capacity > 0
   * @constructor
   * @param {number} capacity
   */
  constructor(capacity) {
    if (!capacity || capacity < 0) this.capacity === 0;
    else this.capacity = capacity;
    this.array = [];
  }

  /**
   * Return the element at index i.
   * The function assumes that index i is valid
   * @param {number} i
   * @returns {number}
   */
  get(i) {
    if (!this.checkValidPosition(i)) return false;
    return this.array[i];
  }

  /**
   * Sets the element at index i to n.
   * Assumes that index i is valid.
   * @param {number} i
   * @param {number} n
   * @returns {void}
   */
  set(i, n) {
    if (!this.checkValidPosition(i)) return null;
    this.array[i] = n;
    return null;
  }

  /**
   * Will push the element n to the end of the array
   * @param {number} n
   * @returns {void}
   */
  pushback(n) {
    if (this.array.length === this.capacity) this.resize();
    this.array.push(n);
    return null;
  }

  /**
   * Pops and return the element at the end of the array.
   * Assumes that the array is non-empty
   * @returns {number}
   */
  popback() {
    return this.array.pop() || null;
  }

  /**
   * Will double the capacity of the array
   * @returns {void}
   */
  resize() {
    this.capacity *= 2;
    return null;
  }

  /**
   * Returns the number of elements in the array
   * @returns {number}
   */
  getSize() {
    let numberOfElements = 0;

    for (const element in this.array)
      if (element !== null || element !== undefined) numberOfElements++;

    return numberOfElements;
  }

  /**
   * ReturnS the capacity of the array
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
