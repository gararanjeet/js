"use strict"
function fun() {
  function a() {
    console.log(b);
    console.log(c);
  }
  b = 10;
  a();
  c = 100;
}
function fun1() {
  function shadow() {
    var c = 200;
    console.log(c);
    c = 50;
  }
  shadow();
  console.log(c);
}

function fun2() {
  // function scope(obj) {
  //   with (obj) {
  //     done = 20;
  //   }
  // }
  // var obj = { notdone: 10 };
  // scope(obj); // as notdone property is not present for obj the result will be similar to noraml LHS lookup
  // console.log(obj);
  // console.log(done);
}

function fun3() {
  var a;
  if (false) {
    b = 10;
  }
  console.log(a, b);
}

function fun4() {
  var a;
  if (false) {
    var b = 10;
  }
  console.log(a, b);
}

function fun5() {
  undefined = 10;
  console.log(undefined);
}
fun5()