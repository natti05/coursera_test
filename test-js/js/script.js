var x = "hello"
var message = "in global"
console.log("global:message=" + message)

var a = function() {
  var message = "inside a";
  console.log("a:message=" + message)
  b();
  var c = function() {
	console.log("c inside function a:message =" + message)
   }
   b()
   c()
}

var b = function() {
	console.log("b:message =" + message)
}
a();

var y;

console.log(y);

var string = "bye";

string += " mister";

console.log(string);

// math operators: (+ - * /) 
console.log(5 + 4);
console.log((5 + 4) - 4);
console.log(undefined - 4);

// equality ==
var x = 4, y = 4;
if (x == y) {
  console.log("x = 4 is equal to y = 4");
}

// strict equality ===

var x = "4";
if (x == y) {
  console.log("x y equal");
} 

if (x === y) {
  console.log("x is equal to y");
}

else {
	console.log ("they are different");

// ***** If statement (all false) "|| or"
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true) "&& and"
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}

}