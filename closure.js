function fn() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, 1000);
  }
}

function fn1() {
  for (var i = 1; i <= 5; i++) {
    (function () {
      setTimeout(function timer() {
        console.log(i);
      }, 1000);
    })();
  }
}

function fn2() {
  for (var i = 1; i <= 5; i++) {
    (function () {
      var j = i;
      setTimeout(function timer() {
        console.log(j);
      }, 1000);
    })();
  }
}

function fn3() {
  for (var i = 1; i <= 5; i++) {
    (function (j) {
      setTimeout(function timer() {
        console.log(j);
      }, 1000);
    })(i);
  }
}

function fn4() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function timer() {
      console.log(i);
    }, i * 1000);
  }
}

function fn5() {
  function foo() {
    console.log(a);
  }
  function bar() {
    var a = 3;
    foo();
  }
  var a = 2;
  bar();
}

// how to create block scoped variables without using let or const? (try/catch or IIFE)

try {
  throw undefined;
} catch(a) {
  a = 10;
  console.log(a);
}
console.log(a)