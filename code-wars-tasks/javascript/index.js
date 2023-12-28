const proto_obj = {
  name: "user",
};

const obj = {
  color: "red",
};

obj.__proto__ = proto_obj;

console.log("color" in obj); // true
console.log("name" in obj); // true
console.log(obj.hasOwnProperty("color")); // true
console.log(obj.hasOwnProperty("name")); // false
