function add(num1, num2) {
  var sum = num1 + num2;

  this.addwith3 = function addWith3(num3) {
    return (result = num3 + 3);
  };
}

var a = new add();
console.log(a.addwith3(4));
