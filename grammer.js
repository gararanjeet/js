function fun() {
  var a = 10; // this statement returns undefined
  a; // returns 10
}

function fun1() {
  // this works in ES7
  //   var a, b;
  //   a = do {
  //     if (true) {
  //       b = 4 + 38;
  //     }
  //   };
  //   console.log(a);
}

function fun2() {
  var a = 42;
  var b = a++; // first it returns a value then the a is incremented
  var c = ++a; // first a is incremented then value is returned
  console.log(b);
  console.log(c);
}

function fun3() {
  var a = 42;
  // ++a++;  // this gives error because a++ is evaluated first it return 42 value and ++42 is not a valid because increment cant be dont on litteral
  console.log(a);
}

function fun4() {
  var a = 43;
  var b = a++;
  console.log(b);
}

function fun5() {
  var obj = {
    a: 42,
  };
  obj.a;
  var res = delete obj.a; // here removing the property is side effect, and return value true or false
  obj.a;
  console.log(a);
}

function fun6() {
  var a;
  a = 10; // here the assignment of 10 is known as side effect, and return value is 10 which is assigned to a
}

function fun7() {
  // try it out in browser
  //[] + {};
  // { } +[];
}

function fun8() {
  var a = 19;
  var b = 10;
  if (a < b) {
    console.log("hello");
  } else {
    if (a == b) {
      console.log("hai");
    } else {
      console.log("done");
    }
  }

  // the below is converted as above
  if (a < b) {
    console.log("hello");
  } else if (a == b) {
    console.log("hai");
  } else {
    console.log("done");
  }
}

function fun9() {
  console.log((false && true) || true);
}

function fun10() {
  //short circuiting
  function foo() {
    console.log(a);
  }
  var a = 42;
  var b = 0;
  a && foo();
  b && foo();
}

function fun11() {
  console.log(typeof a);
  console.log(typeof b);
  let b;
}

function fun12() {
  var b = 3;
  function foo(a = 42, c = a + b + 5) {
    console.log("inside funciton");
  }
  foo();
}

function fun13() {
  var b = 3;
  function foo(a = 42, b = a + b + 5) {
    console.log("inside funciton");
  }
  foo();
}

function fun14() {
  function foo(a = 42, b = a + 1) {
    console.log(arguments.length, a, b, arguments[0], arguments[1]);
  }
  foo();
  foo(10);
  foo(10, undefined);
  foo(10, null);
}

function fun15() {
  for (var i = 0; i < 10; i++) {
    try {
      continue;
    } finally {
      console.log(i);
    }
  }
}

function fun16() {
  function foo() {
    try {
      return 42;
    } finally {
      console.log("hello");
    }
    console.log("never runs");
  }
  console.log(foo());
}

function fun17() {
  var a = "42";
  switch (true) {
    case a == 10:
      console.log("10 or '10'");
      break;
    case a == 42:
      console.log("42 or '42'");
      break;
    default:
      break;
  }
}

function fun18() {
  var a = "hello world";
  var b = 10;
  switch (true) {
    case a || b == 10:
      console.log("case");
      break;
    case !!(a || b == 10):
      console.log("");
      break;
    default:
      console.log("default");
  }
}

function fun19() {
  var a = 10;
  switch (a) {
    case 1:
    case 2:
      break;
    default:
      console.log("default");
    case 3:
      console.log("3");
      break;
    case 4:
      console.log("4");
  }
}

fun19();

// Every statement has a return value (we can check it in browser consol)
// var a = 10 results in 10 but var statement returns undefined
// Variable declaration algorithm actually return string with variable name but it is swallowed
// up by VariableStatement algorithmwhich forces an empty completion value.
// {} has different meaning in different circumstances like as obj litteral, as block, as destructuring obj
// there is no else if in js it is actually works as if and else only
// associativity is different from order of execution
// order of execution is always left to right but associativity defines the grouping
// ASI (Automatic Semicolon Insertion) is when JS assumes a ; in certain places even if we dont put.
// ; is actully expected at the end of return, do..while, break, continue, yeild.. etc...
// even if we dont keep a ; JS automatically adds it
// js only add ; in the presence of new line
// ASI is a error correction routine. (parser error)
// Temporal Dead Zone refers to places in code where a variable reference cannot yet made, because it
// hasnt reached its required initialization
// Switch statement uses === for comparision
// if we want coercion to occur we can provide "case a == 43" but the value of the expression and the value provided in the switch statement
// still uses === for comparision.
// Host objects are objects which are created by the env. where js is running (for ex: browser)
// <div id="foo"></div> creates foo variable globally
// never extend native prototypes
