import { linkedList } from "./list.js";

export class HashMap {
  constructor(loadFactor = 0.75, capacity = 16) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new linkedList());
    this.size = 0;
  }

  #checkResize() {
    const currentLoadFactor = this.size / this.capacity;
    if (currentLoadFactor > this.loadFactor) {
      this.#resize(2 * this.capacity);
    }
  }

  #resize(newCapacity) {
    const oldBuckets = this.buckets;
    this.size = 0;
    this.capacity = newCapacity;
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new linkedList());
    for (const bucket of oldBuckets) {
      if (bucket) {
        bucket.forEach((key, value) => this.set(key, value));
      }
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeNumber + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const isNew = this.buckets[index].set(key, value);
    if (isNew) {
      this.size++;
      this.#checkResize();
    }
  }

  get(key) {
    return this.buckets[this.hash(key)].get(key);
  }

  has(key) {
    return this.buckets[this.hash(key)].has(key);
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    if (!bucket) return false;

    const removed = bucket.remove(key);
    if (removed) this.size--;

    return removed;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = new Array(this.capacity)
      .fill(null)
      .map(() => new linkedList());
    this.size = 0;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      let current = bucket.head;
      while (current) {
        result.push(current.key);
        current = current.next;
      }
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      let current = bucket.head;
      while (current) {
        result.push(current.value);
        current = current.next;
      }
    }
    return result;
  }

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      let current = bucket.head;
      while (current) {
        result.push([current.key, current.value]);
        current = current.next;
      }
    }
    return result;
  }
}
