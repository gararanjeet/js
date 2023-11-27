function fun() {
  console.log(JSON.stringify(undefined));
  console.log(JSON.stringify(function () {}));
  console.log(JSON.stringify([1, undefined, function () {}, 4]));
  console.log(JSON.stringify({ a: 2, b: function () {} }));
}

function fun1() {
  var a = {
    b: 42,
    c: "42",
    d: [1, 2, 3],
  };
  JSON.stringify(a, ["b", "c"]);
  JSON.stringify(a, function (k, v) {
    if (k !== "c") return v;
  });
}

function fun2() {
  var a = new Boolean(false);
  if (a === false) {
    console.log("yes");
  } else console.log("no");
}

function fun3() {
  console.log(1 + null);
  console.log(1 + undefined);
  console.log(1 + "43");
  console.log(1 + "hello");
  console.log(1 * "helo");
  console.log(1 + false);
  console.log(1 + true);
  console.log(1 + { a: 1 });
  console.log(1 * { a: 1 });
}

function fun4() {
  var a = { a: 1 };
  a.valueOf = () => 44;

  console.log(a + "");
  console.log(1 * a);
}

function fun5() {
  var a = { a: 1 };
  a.toString = () => 42;

  console.log(a + "");
  console.log(1 * a);
}

function fun6() {
  var a = { a: 1 };
  a.toString = () => 42;
  a.valueOf = () => 44;

  console.log(a + "");
  console.log(1 * a);
}

function fun7() {
  var a = { a: 1 };
  a.toString = 43;
  a.valueOf = 44;

  console.log(a + "");
  console.log(1 * a);
}

function fun8() {
  var a = [1, 2, 3];
  a.valueOf = () => 6;
  console.log(String(a)); // wont use overridden methods
  console.log(1 + a);
}

function fun9() {
  var a = new Boolean(false);
  var b = new Number(0);
  var c = new String("");

  var d = a && b && c;
  var e = Boolean(a && b && c);
  console.log(d, e);
}

function fun10() {
  // run this is browser
  var a = document.all;
  if (!a) {
    console.log("hello");
  }
}

function fun11() {
  var a = "false";
  var b = "0";
  var c = "''";
  var d = Boolean(a && b && c);
  d;
}

function fun12() {
  var a = [];
  var b = {};
  var c = function () {};
  var d = Boolean(a && b && c);
  d;
}

function fun13() {
  if ([]) console.log("empty array 1");
  if (1(1 * [])) console.log("empty array 2");
  if (!(1 * [1])) console.log("non empty array");
}

function fun14() {
  // first they are converted number then to 32 bit integers then bitwise operation is done
  console.log(0 | "1");
  console.log(0 | -0);
  console.log(0 | NaN);
  console.log(0 | Infinity);
  console.log(0 | -Infinity);
}

function fun15() {
  console.log(Number("10"));
  console.log(parseInt("10"));
  console.log(Number("10px"));
  console.log(parseInt("10pd"));
}

function fun16() {
  // dont use like this
  console.log(parseInt(0.000008));
  console.log(parseInt(0.0000008)); // -> "8e-7"
  console.log(parseInt(false, 16));
  console.log(parseInt(parseInt, 16));
  console.log(parseInt("0x10"));
  console.log(parseInt("103", 2));
  console.log(parseInt([1, 2, 3, 4]));
}

function fun17() {
  var a = {
    a: 10,
    valueOf: () => "10",
  };
  var b = {
    b: 10,
    valueOf: () => () => 10,
    toString: () => "10",
  };
  console.log(a + b);
}

function fun18() {
  var a = {
    a: "hello",
    valueOf: () => "10",
    toString: () => "100",
  };
  b = `${a}`;
  c = a + a;
  console.log(b, typeof c);
  d = a - a;
  e = "100" - "100";
  console.log(d, e);
}

function fun19() {
  var a = {
    a: "hello",
    valueOf: () => "10",
    toString: () => "100",
  };
  b = String(a);
  c = a + "";
  console.log(b);
  console.log(c);
}

function fun20() {
  function onlyOne() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      // skip falsy values. same as treating
      // them as 0's, but avoids NaN's.
      if (arguments[i]) {
        sum += !!arguments[i];
      }
    }
    return sum == 1;
  }
  var a = {};
  var b = false;
  console.log(onlyOne(a, a));
}

function fun21() {
  var a = "";
  var b = "hello";
  var c = a || b;
  var d = a && b;
  console.log(c);
  console.log(d);
}

function fun22() {
  var a = "";
  var b = "hello";
  var c = a + b || b;
  var d = a + b ? a : b;
  console.log(c);
  console.log(d);
}

function fun23() {
  function foo(a, b) {
    a = a || "hello";
    b = b || "world";
    console.log(a + " " + b);
  }
  foo();
  foo("yeah", "yeah!");
  foo("yeah", "");
}

function fun24() {
  //short circuiting
  function foo() {
    console.log(a);
  }
  var a = 42;
  var b = 0;
  a && foo();
  b && foo();
  // if (a) {
  //   foo()
  // }
  // js minifier converts the above code to "a && foo()"
}

function fun25() {
  var a = 42;
  var b = null;
  var c = "foo";
  if (a && (b || c)) {
    // result will be "foo" which is then coerced to boolean
    console.log("yep");
  }
}

function fun26() {
  var a = "Infinity";
  var b = Number(a);
  if (a == b) console.log(b); // a is coerced to Number
  else console.log("not equal");
}
//bolean is coerced to number
function fun27() {
  var a = 42;
  if (a == true) console.log("true");
  else console.log("false");
}

function fun28() {
  var a = 42;
  if (a == false) console.log("true");
  else console.log("false");
}

function fun29() {
  var a = "1";
  if (a == true) console.log("true");
  else console.log("false");
}

function fun30() {
  var a;
  if (a == null) console.log("true");
  else console.log("false");
}

function fun31() {
  var a = "abc";
  var b = new String(a);
  if (a == b) console.log("a == b");
  else console.log("a != b");
  if (a === b) console.log("a === b");
  else console.log("a !== b");
}

function fun32() {
  console.log("0" == null);
  console.log("0" == undefined);
  console.log("0" == false);
  console.log("0" == NaN);
  console.log("0" == 0);
  console.log("0" == "");
  console.log(false == null);
  console.log(false == undefined);
  console.log(false == NaN);
  console.log(false == 0);
  console.log(false == "");
  console.log(false == []);
  console.log(false == {});
  console.log("" == null);
  console.log("" == undefined);
  console.log("" == NaN);
  console.log("" == 0);
  console.log("" == []);
  console.log("" == {});
  console.log(0 == null);
  console.log(0 == undefined);
  console.log(0 == NaN);
  console.log(0 == []);
  console.log(0 == {});
}
function fun32() {
  // a <= b -> b < a
  var a = { b: 42 };
  var b = { b: 43 };
  console.log(a < b);
  console.log(a == b);
  console.log(a > b);
  console.log(a <= b);
  console.log(a >= b);
}

// type casting is done at compiler time coercion is done at run time
// undefined, functions and symbol are not JSON-safe so they are excluded.
// if they occur in array they are replaced by null, in object those properties are excluded.
// if there is a circular reference there will be error thrown
// Object.toJSON() will tries return a JSON-safe value suitable for stringicaiton.
// explict coercion wont use overridden methods ex: fun8
// The main difference btw == and === is the loose equality allows coercion while the strict equality doesnt allow coercion
// both == and === actually check the types of the operands before comparing but they behave differently if types are different.
// the != and !== follow same rules as == and === but the final result is negated in != and !==
// number == string -> string coerced to number
// boolean == anything -> boolean coerced to number
// object == primitiveValue -> ToPrimitive(object)
/*
To String
null -> "null"
undefined -> "undefined"
42 -> "42"
true -> "true"
false -> "false"
object -> getDefaultValue by toString() if its not premitive then get value by valueOf() which is [[caller]] 
if neither valueOf and toString are callable then it will throw an error


To Number
undefined -> NaN
null -> 0
true -> 1
false -> 0
"42" -> 42
"hello" -> NaN
object -> getDefaultValue by valueOf() if Its not premitive then get value of toString() which is [[caller]]
if neither valueOf and toString are callable then it will throw an error
[1,2,3] -> valueOf returns [1,2,3] which is not premitive, the stringOf return "1,2,3" when converted to number gives NaN
[] -> 0 // valueOf return [] which is not premitive, the stringOf return "" which then converted to number as 0
"" -> 0

To Boolean
true != 1 
false != 0
Numbers are different than boolean 
but when coerced true -> 1, false -> 0
object -> true

Falsy values
undefined
null
false
+0, -0 and NaN
""

Falsy Objects
document.all is an example its array like structure but when coerced it returs false

logical operator wont return true or false values it actually selects the operands 
a = a || b -> a? a: b
a = a && b -> a? b: a

difference between logical operator and ternary operator is in logical operator a is evaluated only once
but in ternary operator a is evaluated twice (if a is a function call result may vary)
*/
