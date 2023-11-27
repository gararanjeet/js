function fun() {
  var a = new String("abc");
  var b = function () {};
  console.log(a);
  console.log(typeof a);
  console.log(a instanceof String);
  console.log(Object.prototype.toString.call(a));
  console.log(Object.prototype.toString.call(b));
  console.log(Object.prototype.toString.call(null));
  console.log(Object.prototype.toString.call(undefined));
}

function fun1() {
  var a = "String"; // always prefer this approach
  var b = new String("String"); //should not use this approach
  console.log(a.length); //faster
  console.log(b.length); // slower
}

function fun2() {
  var a = new Boolean(false);
  if (!a) {
    console.log("hello");
  } else {
    console.log("hai");
  }
}

function fun3() {
  var b = new String("");
  if (!b) {
    console.log("hello");
  } else {
    console.log("hai");
  }
}

function fun4() {
  var a = new String("abc");
  var b = new Number(42);
  console.log(a.valueOf());
  console.log(b.valueOf());
}

function fun5() {
  var a = new String("abc");
  var b = a;
  a = a + "";
  if (a === b) {
    console.log("yeas");
  }
  console.log(a);
}

function fun6() {
  var a = Array(10);
  var b = [10];
  console.log(a);
  console.log(b);
}

function fun7() {
  var a = [];
  a.length = 3;
  var b = [undefined, undefined, undefined];
  var c = new Array(3);
  console.log(a, b, c);
}

function fun8() {
  var a = [];
  a.length = 3;
  var b = [undefined, undefined, undefined];

  console.log(a.join(","));
  console.log(b.join(","));
}

function fun9() {
  function returnIndex(v, i) {
    return i;
  }
  var a = Array(3);
  var b = [undefined, undefined, undefined];
  a = a.map((value, index) => returnIndex(value, index));
  b = b.map((value, index) => returnIndex(value, index));
  console.log(a, b);
}

function fun10() {
  var a = [1, 2, 3];
  a.length = 0;
  console.log(a);
}

function fun11() {
  var a = Array.from({ length: 3 });
  console.log(a);
}

function fun12() {
  var a = Array.from(
    { length: 2 },
    function (_, i) {
      return i;
    },
    null // "this" parameter
  );
  console.log(a);
}

function fun13() {
  var a = [1, 2, 3, 4, 5];
  delete a[1];
  console.log(a.length);
  console.log(a);
}

function fun14() {
  var a = [1, 2, 3, 4, 5];
  delete a[2];
  a.forEach((v, i) => console.log(i, v));
}

function fun15() {
  var date = Date();
  var newDate = new Date();
  console.log(date, newDate);
  console.log(Date.now());
}

function fun16() {
  var a = Symbol();
  var b = Symbol();
  console.log(a == b);
}

function fun17() {
  var a = {
    toJSON: () => {
      return "hello";
    },
  };
  console.log(JSON.stringify(a));
}

function fun18() {
  var a = {
    [Symbol.iterator]: function* () {
      yield 1, yield 2, yield 3;
    },
  };
  for (let i of a) {
    console.log(i);
  }
  console.log(a.toString());
}
// "Internal [[class]]" typically refers to an internal property that is used to identify the type of an object.
// this can be accessed using Object.prototype.toString.call()
// object  wraping is done automatically in js. Hence it is better to use primitive values than objects
// In array and error creation we can ommit new keyword but the result wont effect.
// In fun1 a.length is optimised than b.length so b.length is slower and another reason is fun2 and fun3
// we should always declare object as {}, we should not use "new Object()" reason is performance
// other reason for not to create object using Object() is we cant add all properties at once.
// "new Object()" is used when we want to delcared objects with dynamic properties.
// The reason is similar to usage for RegExp() and function()
// Date() returns the current timestamp value in signed integer number of milliseconds since Jan 1, 1970
// output of the Date() is not specified. but the output is similar to "Tue Nov 21 2023 15:15:39 GMT+0530 (India Standard Time)" in browsers
// symbols in js are used to create singleton objects or unique values
// when symbols are used as object keys they cant be accessed directly.
// Each of the built-in native constructors has its own ".prototype" object --Array.prototype ,String.prototype , etc.
