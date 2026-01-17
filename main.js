import { HashMap } from "./class.js";

const test = new HashMap();

test.set("apple", "red fruit");
test.set("banana", "yellow fruit");
test.set("carrot", "orange vegetable");
test.set("dog", "brown animal");
test.set("elephant", "large gray animal");
test.set("frog", "green amphibian");
test.set("grape", "purple fruit");
test.set("hat", "black clothing");
test.set("ice cream", "white dessert");
test.set("jacket", "blue clothing");
test.set("kite", "pink toy");
test.set("lion", "golden animal");

console.log("Length (should be 12):", test.length());

test.set("apple", "green apple");
test.set("dog", "loyal dog");
test.set("lion", "king of jungle");

console.log("Length after overwrite (should still be 12):", test.length());

test.set("moon", "silver object");

console.log("Length after resize (should be 13):", test.length());

console.log("Get apple:", test.get("apple"));
console.log("Get moon:", test.get("moon"));

console.log("Has banana:", test.has("banana"));
console.log("Has snake:", test.has("snake"));

console.log("Remove carrot:", test.remove("carrot"));
console.log("Remove snake (false):", test.remove("snake"));
console.log("Length after remove (should be 12):", test.length());

console.log("Keys:", test.keys());
console.log("Values:", test.values());
console.log("Entries:", test.entries());

test.clear();
console.log("Length after clear (should be 0):", test.length());
console.log("Keys after clear:", test.keys());
