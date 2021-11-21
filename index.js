class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let newArr = this.items;
    newArr.push(item)
    newArr.sort((a, b) => {
      return a-b;
    })
    this.length++;
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error ("OutOfBounds")
    }
      return this.items[pos]
  }

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
     return this.items.sort((a, b) => (a - b))[this.length - 1];
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
     return this.items.sort((a, b) => (b - a))[this.length - 1];
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
      return this.items.reduce((a,b) => a + b, 0)
  }

  avg() {}
}

module.exports = SortedList;
