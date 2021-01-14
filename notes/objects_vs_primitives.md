Things to understand

* Every value in JavaScript is either a primitive or an object

* Primitives are atomic values
  1. They don't have parts that can be changed,they are immutable.
    * strings
    * numbers
    * booleans
    * null
    * undefined
    * bigInts
    * symbols

* Objects are "compound" values made up of primitives or other objects
  * Simple Objects
    * Structure that contains multiple named values.
  * Arrays
    * Use integer indexes instead of keys.
  * Dates
  * Functions

* Primitive values are immutable. In other words, you can't add to, remove from or otherwise change a primitive value. Any operation performed on a primitive value returns a new primitive value.
  * Even 0 + 0 would return a new value of 0.
   
* Objects are mutable. That is, certain operations on objects can change the object in place. All variables that have a reference to that object will see that change.
