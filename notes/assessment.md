# JS109 Assessment Study Guide
- [JS109 Assessment Study Guide](#js109-assessment-study-guide)
  - [Topics](#topics)
      - [Declarations, initialization, assignment, and re-assignment](#declarations-initialization-assignment-and-re-assignment)
      - [Variable scope, especially how variables interact with function definitions and blocks](#variable-scope-especially-how-variables-interact-with-function-definitions-and-blocks)
      - [Primitive values, objects, and type coercions](#primitive-values-objects-and-type-coercions)
      - [Object properties](#object-properties)
      - [Mutability vs. immutability vs. const (LOOK INTO)](#mutability-vs-immutability-vs-const-look-into)
      - [Loose and strict equality](#loose-and-strict-equality)
      - [Passing arguments into and return values out of functions](#passing-arguments-into-and-return-values-out-of-functions)
      - [Working with Strings](#working-with-strings)
      - [Working with Arrays, especially the iteration methods (forEach, map, filter, and find)](#working-with-arrays-especially-the-iteration-methods-foreach-map-filter-and-find)
      - [Working with objects; accessing keys and values of an Object as arrays](#working-with-objects-accessing-keys-and-values-of-an-object-as-arrays)
      - [Arrays are objects](#arrays-are-objects)
      - [Understand the concepts of pass-by-reference and pass-by-value](#understand-the-concepts-of-pass-by-reference-and-pass-by-value)
      - [Variables as pointers](#variables-as-pointers)
      - [Console.log vs return](#consolelog-vs-return)
      - [Truthiness vs. boolean](#truthiness-vs-boolean)
      - [Function definition and invocation](#function-definition-and-invocation)
      - [Function declarations, function expressions, and arrow functions](#function-declarations-function-expressions-and-arrow-functions)
      - [Implicit return value of function invocations](#implicit-return-value-of-function-invocations)
      - [First-class functions](#first-class-functions)
      - [Side-effects](#side-effects)
      - [Naming conventions (legal vs idiomatic)](#naming-conventions-legal-vs-idiomatic)
      - [Be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.](#be-able-to-explain-what-a-function-does-without-talking-about-its-implementation-that-is-document-a-functions-use-and-purpose)
  - [Resources](#resources)

## Topics

#### Declarations, initialization, assignment, and re-assignment
  * Declarations are the act of creating a variable name without assigning it a value.
  * Initialization is the act of declaring and assigning a variable a value upon creation.
  * Assignment is the act of attaching either a primitive data type to a variable by value, or a pointer to a memory location that holds an object, by reference.
  * Re-assignment is the act of removing all previous values or pointers of a variable, and assigning it new data.
  
#### Variable scope, especially how variables interact with function definitions and blocks
  * Variables declared with 'let' or 'const' have block scope. They can be accessed by all further nested inner blocks, but cannot be accessed by any outer block. A function definition (sometimes also called a function declaration or function statement) are followed by the function body which is denoted by curly braces ({ }) any variable declared within a function body, will only be accessible while the function is running. However, a variable can be declared outside of the function body in an outer scope, as all variables declared in an outer scope, will be accessible by inner scopes.
  
#### Primitive values, objects, and type coercions
  * Primitive values (also called primitive data type) is data that is not an object, and has no methods. They are immutable, and are passed by value. They are as follows:
    * [undefined](https://developer.mozilla.org/en-US/docs/Glossary/undefined)
      * Assigned to variables that have have just/only been declared.
      * Returned from methods/functions as an implicit return.
      * Typically occurs implicitly, if you wish to set the absence of a value, you would set the variable to null.
    * [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean)
      * Either True, or False. Not to be confused with a _truthy value_ or a _falsy value_.
    * Number
      * 0-9, not to be confused with '0-9'.
    * String
      * 'What you are reading'.
    * BigInt
      * Don't need to worry about this at the moment
    * Symbol
      * Don't need to worry about this at the moment
    * [null](https://developer.mozilla.org/en-US/docs/Glossary/Null)
      * A null value represents represents a reference that is pointing to the absence/non-existence of something. Similar to undefined.
        * Note that typeof null === 'object' // true (Don't need to worry about why)
      * Usually used to mark the intentional absence of a value for a variable assignment, or return value.
  
  * [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
    * All arrays are Objects.
    * Objects are a collection of key value pairs. The key is similar to 0-indexed arrays, but instead of using numbers to access specific elements, you use the string that the key assigned as. Values can be any data type, including other objects, arrays, functions, primitive values.
    * An objects key-value pair, is also called a property of that object. If the value of the key-value pair is a function, that property is referred to as a Method.
    * Properties are essentially variables that are associated with that specific object.

  * [Type Coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
    * Type Coercion can happen both implicitly, and explicitly. It is the act of changing a values data type, into a different data type. For example, 1, is a number, '1' is a string.
    * There are various ways that Type Coercion can occur in JavaScript implicitly such as on operands being acted upon by an operator.
    * It is generally considered best practice to avoid implicit type coercion.
  
#### Object properties
  * Object properties, also referred to as key-value pairs, are the data that makes up an object.
  * Keys, also can be called property names
  * Values, also can be called property values
  * Property values can include any data type, including other objects. 
  * If a property value is a function, that property is considered a method.
  
#### Mutability vs. immutability vs. const (LOOK INTO)
  * Mutability refers to the availability of a variables value to be changed. Primitive values are never mutable. Only Objects/Arrays can be mutable.
  * Immutability refers to the lack of availability of a variables value to be changed. Primitive values are always immutable.
  * When a variable is declared through const (instead of let/var) the variable identifier cannot be reassigned later, this _doesn't_ mean that the contents are immutable, it simply means that the identifier variable that was declared with const cannot reused or reassigned.
    * NOTE: when declaring with const, the variable must be initialized with a value.
  
#### Loose and strict equality
  * Loose equality generally refers to the equality operator (==, !=), this operator will attempt to do implicit type coercion on it's operands when they are of a different type, before comparing the resulting values.
  * Strict equality generally refers to the strict equality operator (===, !==) that will not do any implicit type coercion to attempt to evaluate the operands. It is generally considered best practice to use the strict equality operator, and do Explicit Type Coercion on the operands. This allows the developer to avoid unforeseen bugs that can arise with implicit type coercion, as well as makes the intention of the comparison more clear.
  
#### Passing arguments into and return values out of functions
  * Arguments are passed in where previous parameter variables have been established.
  * Both primitive data types, and Objects/arrays may be passed into a function as an argument. As well as other functions. 
  * When passing in variable identifiers that point to a memory location of an object or array, it's important to note that any direct modification of that argument, will mutate the original object/array. 
    * Variable identifiers that point to a primitive data type, such as a number, are passed into functions as values, and any change to the value of that argument, will not be reflecting by the original argument outside of the functions scope.
  * Functions can return any data type, including other functions. If a return value is not explicitly stated, the function will return undefined, regardless of if your code is made to utilize that return value.
  
#### Working with Strings
  * Strings are a primitive data type and cannot be mutated.
    * Note: While the string itself cannot be mutated, the variable who's value is the string, can be reassigned.
  *  Strings can be thought of as a collection of characters, in the sense that every string is 0-based indexed, and can be accessed using bracket notation similarly to an array.
  * The primitive data type, string in JS belongs to the String Object, as such, strings contain a built in property of .length, and have various included methods that can be used to act upon strings.
  * [String Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
  
#### Working with Arrays, especially the iteration methods (forEach, map, filter, and find)
  * Arrays are a collection of elements(values) that can be any data type, including other arrays and objects.
  * Arrays are Zero-Based indexed, and its elements can be accessed various ways, the most basic of which, would be bracket notation.
    * Note: Arrays can only use integers to set and access elements. If strings are used during bracket/dot notation, it is properties that are being created/accessed.
  *  Similar to strings, arrays also have a .length property
     *  Note: Arrays can be _sparse_, their length does not necessarily relate to the number of _defined_ elements in the array.
  *  Arrays belong to the Array class Object, and as such, have various built in methods.
     *  [Methods of Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
        *  .forEach(callback(currentValue[, index[, array]])
           *  Takes a callback function that may utilize above parameters. It is similar to a for loop, in that the callback function will run once for each element in the array. 
           *  The method will always return undefined. 
           *  The method does NOT mutate the array upon which it is called, but the callback function may possibly mutate the calling array.
           *  There is NO WAY to break out of a .forEach loop except by throwing an exception. Therefore it is not recommended if you need to stop it early.
        *  .map(callback(currentValue[, index[, array]])
           *  Takes a callback function, the return value of which is a new array. 
              *  The contents of that array, are the return values of the callback function.
              *  This method does not mutate the array on which it is called, though the callback function could.
              *  The array returned will be the result of each instance of the callback functions return value, if for whatever reason a return value is not specified or results in undefined, .map is perfectly fine returning undefined, resulting in an array who's element is undefined.
        *  .filter(callback(currentValue[, index[, array]])
           *  Takes a callback function and returns a new array.
              *  The elements of that array are all elements of the initial array where the callback function returned true, or a value that coerces to true.
              *  Can be thought of as returning a new array, where each element passed the callback functions test.
              *  If no elements pass the test, an empty array is returned.
              *  Does not mutate the array.
        *  .find(callback(element[, index[, array]])[, thisArg])
           *  Returns the value of the first element in the array that returns a truthy/true value from the callback function. 
           *  If no elements in the array satisfy the provided callback function, .find() will return undefined.
           *  .find does not mutate the array, but the callback function may.
  *  In general, be very aware of any return value a built in method will return, as well as if the method will mutate the original array or not.


#### Working with objects; accessing keys and values of an Object as arrays
#### Arrays are objects
#### Understand the concepts of pass-by-reference and pass-by-value
* Primitive parameters (such as a number) are passed to functions by value; the value is passed to the function, but if the function changes the value of the parameter, this change is not reflected globally or in the calling function.

* If you pass an object (i.e. a non-primitive value, such as Array or a user-defined object) as a parameter and the function changes the object's properties, that change is visible outside the function, as shown in the following example:
#### Variables as pointers
#### Console.log vs return
#### Truthiness vs. boolean
#### Function definition and invocation
#### Function declarations, function expressions, and arrow functions
#### Implicit return value of function invocations
#### First-class functions
#### Side-effects
#### Naming conventions (legal vs idiomatic)
#### Be able to explain what a function does without talking about its implementation; that is, document a function's use and purpose.

## Resources
  [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)