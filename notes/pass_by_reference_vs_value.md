When you pass a primitive value in JavaScript, you can treat it as if JavaScript is pass by Value, and your inital variable cannot be changed

## When an operation within a function mutates it's arguement, it affects the original object

functions and methods that mutate their callers are destructive

with objects, javascript does attributes of both pass by value and pass by reference, sometimes called pass-by-value-of-the-reference, or call-by-sharing

For most practical purposes, one can speak of values returned by functions as being pass-by-value or pass-by-reference much as we can with arguments. 
 * aka returns of primitives vs returns of objects