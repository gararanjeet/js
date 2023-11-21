function fun() {
  console.log(typeof 10);
  console.log(typeof "10");
  console.log(typeof true);
  console.log(typeof undefined);
  console.log(typeof { le: 10 });
  console.log(typeof Symbol());
}

function fun1() {
  var a = null;
  if (typeof a === "object") {
    console.log(true);
  }
}

function fun2() {
  var a;
  console.log(typeof a);
  console.log(typeof b);
}

function fun3() {
  function fun(a, b) {}
  function fun1(a = 10, b = 10) {}
  console.log(fun.length);
  console.log(fun1.length);
}

function fun4() {
  var a = [];
  console.log(a.length);
  a.hai = "hello";
  console.log(a.length);
}

function fun5() {
  var a = [];
  a["number"] = 10;
  a["100"] = 11;
  a["0"] = 10;
  a["$"] = 10;
  console.log(a.length);
}

function fun6() {
  if (0.1 + 0.2 == 0.3) console.log("hai");
  console.log("hello");
}

function fun7() {
  var undefined = 10;
  if (undefined == 10) {
    console.log("hai");
  }
}

function fun8() {
  // null = 10;
  if (null == null) console.log("hai");
}

function fun9() {
  "use strict";
  undefined = 10;
  console.log(undefined);
}

function fun10() {
  "use strict";
  var undefined = 10;
  console.log(undefined);
}

function fun11() {
  console.log(1 / 0);
  console.log(-1 / 0);
  console.log(Infinity / Infinity);
}

function fun12() {
  var a = Number.MAX_VALUE;
  if (a + 1 == a + 2) {
    console.log("hai");
  } else console.log("hello");
}

function fun13() {
  console.log(Number.MAX_VALUE + 1);
  console.log(Number.MAX_VALUE * 2);
}

function fun14() {
  var a = 2 / "foo";
  var b = -3 * 0;
  Object.is(a, NaN);
  Object.is(b, -0);
}

function fun15() {
  function fun(a) {
    a = a + 1;
  }
  var a = 10;
  fun(a);
  console.log(a); 
}

function fun16() {
  function fun(a) {
    a.push(10);
  }
  var a = [];
  fun(a);
  console.log(a);
}

function fun17() {
  a = [];
  a.length = 10;
  console.log(a[0]);
}

function fun18() {
  function fun(obj) {
    obj.a = 10;
  }
  var a = { a: 1 };
  fun(a);
  console.log(a);
}

function fun19() {
  function fun(x) {
    x = x + 1;
  }
  var a = new Number(1);
  fun(a);
  console.log(a);
}

// console.log(Number.MAX_VALUE)

// what are formal parameters?
// typeof "Undeclared variable" is undefined
// function is a special object which has inner [[caller]] method in it
// array is an object in js so we can add properties to the object.
// array has default property length which is set to the lenght of the array
// string is not array of characters, string is array like structure.
// strings are immutable but arrays are mutable
// Numbers in js are stores using double precession(64-bit)
// Numbers are stored in floating point representation
// mantesa -> 52bits, exponent -> 11bits, sign -> 1bit
// so the max and min integer values for Number are -2^(52) to 2(52)-1
// max and min number value is (+/-)(2-2^(52)*2(1023))
// max number value is 1.7976931348623157e+308
// min number value is 5e-324
// A number greater than the max values should be dealt with "big number" utility
// bitwise operators generally work on 32 bit numbers
// js has +0 and -0, -0 can be useful when we deal with magnitude.
// All the premitive types will be pass by value
// objects, functions are pass by referrence