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

// Every statement has a return value (we can check it in browser consol)
// var a = 10 results in 10 but var statement returns undefined
// Variable declaration algorithm actually return string with variable name but it is swallowed
// up by VariableStatement algorithmwhich forces an empty completion value.
// {} has different meaning in different circumstances liek as obj litteral, as block, as destructuring obj
// there is no else if in js it is actually works as if and else only
