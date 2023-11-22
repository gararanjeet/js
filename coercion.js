function fun() {
  JSON.stringify(undefined);
  JSON.stringify(function () {});
  JSON.stringify([1, undefined, function () {}, 4]);
  JSON.stringify({ a: 2, b: function () {} });
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
  } else console.log("no", a);
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

fun14();
// type casting is done at compiler time coercion is done at run time
// undefined, functions and symbol are not JSON-safe so they are excluded.
// if they occur in array they are replaced by null, in object those properties are excluded.
// if there is a circular reference there will be error thrown
// Object.toJSON() will tries return a JSON-safe value suitable for stringicaiton.
// explict coercion wont use overridden methods ex: fun8
/*
To String
null -> "null"
undefined -> "undefined"
42 -> "42"
true -> "true"
false -> "false"
object -> getDefaultValue by valueOf() if its not premitive then get value of toString() which is [[caller]] 
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
*/
