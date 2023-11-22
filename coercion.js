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
  a.toString = () => 43;
  console.log(1 + a);
  console.log(1 * a);
}
fun4();
// type casting is done at compiler time coercion is done at run time
// undefined, functions and symbol are not JSON-safe so they are excluded.
// if they occur in array they are replaced by null, in object those properties are excluded.
// if there is a circular reference there will be error thrown
// Object.toJSON() will tries return a JSON-safe value suitable for stringicaiton.
/*
To String
null -> "null"
undefined -> "undefined"
42 -> "42"
true -> "true"
false -> "false"
object -> getDefaultValue by valueOf() if its not premitive then get value of toString() which is [[caller]] 
*/
