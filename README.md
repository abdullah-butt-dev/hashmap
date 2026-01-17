# Hash Map Implementation

This project implements a custom **Hash Map** in JavaScript using **separate chaining with linked lists** to handle collisions.

## 📌 Features

- Uses an array of linked lists for collision handling
- Automatically resizes when load factor exceeds 0.75
- Supports all standard hash map operations

## 🧠 Data Structure

- **Hash Table**
- **Collision Resolution:** Separate Chaining
- **Chaining Method:** Linked Lists

Each bucket in the internal array contains a linked list of key–value pairs.

## ⚙️ Methods Implemented

### `set(key, value)`
Adds a new key-value pair or updates an existing key.

### `get(key)`
Returns the value associated with the key or `null` if not found.

### `has(key)`
Returns `true` if the key exists, otherwise `false`.

### `remove(key)`
Removes a key-value pair and returns `true` if successful.

### `length()`
Returns the total number of key-value pairs.

### `clear()`
Removes all entries from the hash map.

### `keys()`
Returns an array of all keys.

### `values()`
Returns an array of all values.

### `entries()`
Returns an array of `[key, value]` pairs.

## 🔁 Resizing Behavior

- Initial capacity: 16
- Load factor: 0.75
- When exceeded, capacity doubles
- All entries are rehashed into new buckets

## 🧪 Testing

A `main.js` file is included to verify:
- Insertion
- Overwriting existing keys
- Automatic resizing
- All accessor methods after resizing
- Clearing the hash map