console.log("hello, it works");

// functions
// sum(2,3);
// function sum(x, y) {
//   console.log(x + y);
//   // function body
//   return x + y;
// }


// 5;
//

var mySum = function(x, y) {
  console.log("x: ",x, "y: ", y, "arguments: ", arguments);
  var args = [].slice.call(arguments);
  var sum = 0;
  for(var i=0; i<args.length; i++) {
    sum = sum + args[i];
  }
  console.log(sum);
  return sum;

};

mySum(2,6);

// 8;

var myArr = [];

for(var i = 0; i < 5; i++) {
  // console.log(i);
  myArr.push(Math.floor(Math.random() * 1000));
}

// console.log(myArr);

var myObj = {
  name: "calvin",
  age: 35
};

// console.log("my keys: ", Object.keys(myObj));


var myCallback = function(value, idx, list) {
  console.log(myObj[value]);
};

Object.keys(myObj).forEach(myCallback);


var calArr = ["calvin", "webster", "sunny", "day"];

var calCal = function(value, idx, list) {
  console.log("foreach value: ", value);
  console.log("foreach idx: ", idx);
  console.log("foreach list: ", list);
};
calArr.forEach(calCal);

for(var j=0; j<calArr.length; j++) {
  console.log("for value: ", calArr[j]);
  console.log("for idx: ", j);
  console.log("for list: ", calArr);
}

redditData.data.children.forEach(function(value, index, list) {
  document.querySelector('body').innerHTML += value.data.title + "<br>";
  console.log(value.data.title);
});
