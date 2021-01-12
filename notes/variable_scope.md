# Variable Scope

## local variables
* Outer scope variables can be accessed by the inner scope.
* Inner scope variables cannot be accesed by the outer scope.
* Nested functions have their own variable scope.
* Inner scope variables (such as parameters) can shadow outer scoped variables.

``` JS
let number = 10;

[1, 2, 3].forEach(number => {
  console.log(number);
});
// 1
// 2
// 3
/*
The outer scoped variable is shadowed and ignored, this also prevents access of that variable, if we were to use "number" in the program, it would be referencing the local parameter.
 */
```
Whenever you have one scope nested within another, variables in the inner scope will shadow variables in the outer scope

### In general, avoiding variable shadowing is best practice.




