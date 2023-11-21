(function foo() {
  function bar(a) {
    i = 3;
    console.log(a * i);
  }
  for (var i = 0; i < 10; i++) {
    bar(i * 2);
  }
});

(function IIFE(undefined) {
  console.log(undefined);
  var a;
  if (a === undefined) {
    console.log("Undefined is safe");
  }
});

function foo() {
  console.log(a);
  var a = 2;
}

function foo1() {
  a = 2;
  var a;
  console.log(a);
}

function foo2() {
  hoistedFunction(); //TypeError
  bar(); //ReferenceError
  var hoistedFunction = function bar() {};
}

function varVsFunctionHoisting() {
  foo();
  var foo;
  foo = function boo() {
    console.log(1);
  };
  function foo() {
    console.log(2);
  }
}

function varVsFunctionHoisting1() {
  foo = function boo() {
    console.log(1);
  };

  foo();
  var foo;

  function foo() {
    console.log(2);
  }
}

function varVsFunctionHoisting2() {
  function foo() {
    console.log("hello");
  }
  console.log(foo);
  foo = 1;
  console.log(foo);
  foo();
}