function fun() {
  function identify() {
    return this.name.toUpperCase();
  }
  function speak() {
    var greeting = "Hello, I'm " + identify.call(this);
    console.log(greeting);
  }
  var me = {
    name: "Kyle",
  };
  var you = {
    name: "Reader",
  };
  console.log(identify.call(me));
  console.log(identify.call(you));
  speak.call(me);
  speak.call(you);
}

function fun1() {
  function foo(num) {
    console.log("foo: " + num);
    this.count++;
  }
  foo.count = 0;
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }
  console.log(foo.count);
}

function fun2() {
  function foo(num) {
    console.log("foo: " + num);
    foo.count++;
  }
  foo.count = 0;
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo(i);
    }
  }
  console.log(foo.count);
}

function fun3() {
  function foo(num) {
    console.log("foo: " + num);
    foo.count++;
  }
  foo.count = 0;
  var i;
  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo.call(i);
    }
  }
  console.log(foo.count);
}

function fun4() {
  function foo() {
    var a = 2;
    this.bar();
  }
  function bar() {
    console.log(this.a);
  }
  foo();
}

function fun5() {
  // example to explain call-site and call-stack
  function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope
    console.log("baz");
    bar(); // <-- call-site for `bar`
  }
  function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`
    console.log("bar");
    foo(); // <-- call-site for `foo`
  }
  function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`
    console.log("foo");
  }
  baz(); // <-- call-site for `baz`
}

function fun6() {
  function foo() {
    console.log(this.a);
  }
  var a = 2; // -> a property for global object is created with name "a". "a" and globalObj.a are the same
  //  (they are not copies they are the same)
  foo();
}

function fun7() {
  function foo() {
    "use strict";
    console.log(this.a);
  }
  var a = 2;
  foo(); // TypeError: `this` is `undefined`
}

function fun8() {
  // its not good to mix strict mode and non strict mode
  function foo() {
    console.log(this.a);
  }
  var a = 2;
  (function () {
    "use strict";
    foo(); // 2
  })();
}

function fun9() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
    foo: foo,
  };
  var a = 10;
  obj.foo();
}

function fun10() {
  function foo() {
    console.log(this.a);
  }
  var obj2 = {
    a: 42,
    foo: foo,
  };
  var obj1 = {
    a: 2,
    obj2: obj2,
  };
  obj1.obj2.foo();
}

function fun11() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
    foo: foo,
  };
  var bar = obj.foo; // function reference/alias!
  var a = "oops, global"; // `a` also property on global object
  bar(); // "oops, global"
}

function fun12() {
  function foo() {
    console.log(this.a);
  }
  function doFoo(fn) {
    // `fn` is just another reference to `foo`
    fn(); // <-- call-site!
  }
  var obj = {
    a: 2,
    foo: foo,
  };
  var a = "oops, global"; // `a` also property on global object
  doFoo(obj.foo); //oops global
}

function fun13() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
    foo: foo,
  };
  var a = "oops, global"; // `a` also property on global object
  setTimeout(obj.foo, 100);
}

function fun14() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
  };
  foo.call(obj);
}

function fun15() {
  function foo() {
    console.log(this.a);
  }
  var obj = {
    a: 2,
  };
  var bar = function () {
    foo.call(obj);
  };
  bar(); // 2
  setTimeout(bar, 100); // 2
  // `bar` hard binds `foo`'s `this` to `obj`
  // so that it cannot be overriden
  bar.call(window); // 2
}

function fun16() {
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }
  var obj = {
    a: 2,
  };
  var bar = function () {
    return foo.apply(obj, arguments);
  };
  var b = bar(3); // 2 3
  console.log(b); // 5
}

function fun17() {
  function foo(something) {
    console.log(this.a, something);
    return this.a + something;
  }
  var obj = {
    a: 2,
  };
  var bar = foo.bind(obj);
  var b = bar(3); // 2 3
  console.log(b); // 5
}

function fun18() {
  function foo(a) {
    var a = 10;
    console.log("hello");
    return;
  }
  var bar = new foo(2);
  console.log(bar);
}

function fun19() {
  function foo(a) {
    this.a = a;
  }
  var bar = new foo(2);
  console.log(bar.a);
}

function fun20() {
  var a = {
    b: 10,
    c: this.d,
  };
  console.log(a);
}
fun20.d = 10;

function fun21() {
  function foo() {
    setTimeout(() => {
      // `this` here is lexically adopted from `foo()`
      console.log(this.a);
    }, 100);
  }
  var obj = {
    a: 2,
  };
  foo.call(obj); // 2
}

function fun22() {
  function foo() {
    // return an arrow function
    return (a) => {
      // `this` here is lexically adopted from `foo()`
      console.log(this.a);
    };
  }
  var obj1 = {
    a: 2,
  };
  var obj2 = {
    a: 3,
  };
  var bar = foo.call(obj1);
  bar.call(obj2); // 2, not 3!
}

// "this" neither refer to the funciton in question nor it refers to the scope
/*
    In fun1 foo is an object so foo.count creats a property count for that obj.
    but when the this.count is called it refers to different count variable instead of the obj property "count"
    hence the foo.count is 0
    *** this.count creates a global count variable
*/
// "this" is not author-time binding but a runtime binding in normal functions.
// "this" is nothing to do with where a function is declared but instead everything to do with the manner in which the function is called(in normal functions).
/*
    There are 4 Rules by which we can know where the "this" is refering to
    1.Default Binding
        Applies to standalone function invocation ex:fun6()
        "this" points to the global object
        In strict global object is not eligible for default binding so this is set to undefined. ex:fun7()
        The above rule is only applicable if the funInvoked is in strict not the function where it is called ex:fun8()
    2.Implicit Binding
        Applies if the call-site have a context object
        The object in context is the object which should be used for the function call's "this" binding.j ex: fun9()
        Only the top/last level of an object property reference chain matters to the call-site. ex:fun10()
        Implicitly lost
            The implicit binding is lost if we assign the reference to another variable or pass it as an parameter to function
            ex: fun11(), fun12(), fun13()
    3.Explicit Binding
        Use of .call() or .apply() and providing the object which you want "this" to refer to 
        ex: fun14()
        Hard Binding variation
            create a function with explicit binding and use new function.
            ex: fun15(), fun16(), fun17()
    4.new Binding
        if new keyword is used to create a new object then "this" refers to the newly created object.

*/

/*
    In JS, constructors are just functions that happen to be called with the new operator in front of them. They are not
    attached to classes, nor are they instantiating a class. They are not even special types of functions. 
    They're just regular functions that are, in essence, hijacked by the use of new in their invocation.
 */

/*
    The following are the 4 rules with prrcrdence for this keyword.
    1. Is the function called with new?. If so, "this" is the newly constucted object. 
        var bar = new foo()
    2. Is the function called with call or apply, even hidden inside a bind hard binding? If so, "this" is the explicitly specified object.
        var bar = foo.call(obj2)
    3. Is the function called with a context, otherwise known as an owning or containing object? If so, "this" is that context object.
        var bar = obj1.foo()
    4.Otherwise, default the "this". If a strict mode, pick "undefined", otherwise pick the "global" object.
        var bar = foor()

 */

// ***In arrow functions "this" refers to the "this" of its lexical scope
