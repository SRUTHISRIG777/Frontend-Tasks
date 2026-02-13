function sayHello(name, callback) {
  setTimeout(function() {
    callback("Hello, " + name + "!");
  }, 1000);
}
function msg(message) {
  console.log(message);
}

sayHello("Sruthi",msg );