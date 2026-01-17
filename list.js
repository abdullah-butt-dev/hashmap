class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class linkedList {
  constructor() {
    this.head = null;
  }

  set(key, value) {
    let temp = this.head;

    while (temp !== null) {
      if (temp.key === key) {
        temp.value = value;
        return false;
      }
      temp = temp.next;
    }

    const node = new Node(key, value);
    if (this.head === null) {
      this.head = node;
      return true;
    }

    temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = node;
    return true;
  }

  get(key) {
    let temp = this.head;
    while (temp !== null) {
      if (temp.key === key) {
        return temp.value;
      }
      temp = temp.next;
    }
    return null;
  }

  has(key) {
    return this.get(key) !== null;
  }

  remove(key) {
    let current = this.head;
    let previous = null;

    if (current !== null && current.key === key) {
      this.head = current.next;
      return true;
    }

    while (current !== null && current.key !== key) {
      previous = current;
      current = current.next;
    }

    if (current === null) {
      return false;
    }

    previous.next = current.next;
    return true;
  }

  forEach(callback) {
    let current = this.head;

    while (current) {
      callback(current.key, current.value);
      current = current.next;
    }
  }
}
