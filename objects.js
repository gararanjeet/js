function fun() {
  function anotherFunction() {}
  var anotherObject = {
    c: true,
  };
  var anotherArray = [];
  var myObject = {
    a: 2,
    b: anotherObject, // reference, not a copy!
    c: anotherArray, // another reference!
    d: anotherFunction,
  };
  var newObj = Object.assign({}, myObject);
  console.log(newObj.a);
  console.log(newObj.b === anotherObject);
  console.log(newObj.c === anotherArray);
  console.log(newObj.d === anotherFunction);
}

function fun1() {
  var myObject = {
    a: [10, 20],
    b: 10,
  };
  console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
  console.log(Object.getOwnPropertyDescriptor(myObject, "b"));
}

function fun2() {
  var myObject = {};
  Object.defineProperty(myObject, "a", {
    value: 2,
    writable: false,
    configurable: true,
    enumerable: true,
  });
  console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
}

function fun3() {
  var myObject = {
    a: 2,
  };
  Object.defineProperty(myObject, "a", {
    value: 4,
    writable: true,
    configurable: false,
    enumerable: true,
  });
  console.log(myObject.a);
  myObject.a = 5;
  delete myObject.a;
  console.log(myObject.a);

  Object.defineProperty(myObject, "a", {
    value: 6,
    writable: true,
    configurable: true,
    enumerable: true,
  });
}

function fun4() {
  var myObject = {};
  Object.defineProperty(myObject, "a", {
    value: [1, 2, 3],
    writable: true,
    configurable: true,
    enumerable: true,
    immutablie: false,
  });
  myObject.a.push(10);
  console.log(myObject);
}

function fun5() {
  var myObject = {
    a: 2,
  };
  Object.preventExtensions(myObject);
  myObject.b = 3;
  myObject.a = 10;
  myObject.b;
  console.log(myObject);
}

function fun6() {
  var myObject = {
    a: 2,
  };
  Object.seal(myObject);
  myObject.b = 3;
  myObject.a = 10;
  delete myObject.a;
  myObject.b;
  console.log(myObject);
}

function fun7() {
  var myObject = {
    a: 2,
  };
  Object.freeze(myObject);
  myObject.b = 3;
  myObject.a = 10;
  delete myObject.a;
  myObject.b;
  console.log(myObject);
}

fun7();
// An object contains key value pairs or properties
// When object is stored in memory it may not store all the properties in the object container
// rather it may store the properties in another locations
// In object conatinaer these property names would be stored, which act as pointers to where the values are stored.
// There are 2 type of access, property access (obj.a) and key access(obj["a"])
// In property access the . operator requires an Identifier compatible property name after it.
// In key access it taks any UTF-8/unicode compatible string
// ex: obj.Super-fun! is not valid but obj["Super-fun!"] is valid
// In objects, property names are always strings. If you use any other value besides a string (primitive) as the property,
// it will first be converted to a string.
// In js there are no methods there are only functions.
// Functions which are bound to objects are not actully bound to them they are just reference to that function.
// Array is object
// we can add a new key value pair but if the key is an non negative integer it may effect the lenght or else it wont
// Duplicating Objects.
//  There are 2 types of duplicating objects one is shallow copy and the other is deep copy
//  In shallow copy the function reference and object references in target object will be refering to same reference as the source object
//  In Deep copy the function reference and object references in target object will be refering to new copy of those references
//  Deep copy is a bit difficult task if there are circular dependencies.
//  For shallow copy we have Object.assign() in ES6 which just copies the contents but not the special properties (property Descriptors)
// Property Descriptors
//  It describes the characteristics of the property ex: fun1()
//  We can add properties to obj using defineProperty() ex: fun2()
//  Writable if set to false we wont be able to modifiy its content it will throw error in strict mode
//  Configurable
//      As long as configurable is true we can modify its descriptor definition, using defineProperty()
//      if we try to modify the descriptor definition when configurable is false it throws error, regardless of strict mode
//      changing configurable to false if a on-way action and cannot be undone!
//      we can chagne writable to false without error but not false to true  if configurable is false
//      Configurable false prevents ability to use the delete operator.

// If an object is set to immutable then we cannot add or delete its properties but we can modify the
// content ussing reference ex: myImmutableObject.foo.push(4) will add 4 to the foo array
// If we set writable and configurable to false then the property will become constant property of an object
// which cannot be changed, redifined or deleted
// If we want to prevent an object from adding new properties then we can prevent Extenseion for that object ex: fun5()
// If we seal an object we cannot add new property, we cannot delete propery and we cannot reconfigure any property
// so seal is basically calling Object.preventExtensions() and setting configurable: false to existing properties ex: fun6()
// If we freeze an object then we cannot even modify existing properties.
// so freeze is basically calling Object.seal() and setting writable: false to existing properties.
