var compactObject = function (obj) {
  const isArray = Array.isArray(obj);
  const res = isArray ? [] : {};

  if (isArray) {
    obj.forEach((el) => {
      if (el && typeof el !== "object") {
        res.push(el);
      }
      if (el && typeof el === "object") {
        const newEl = compactObject(el);
        res.push(newEl);
      }
    });
  } else {
    Object.entries(obj).forEach((el) => {
      const [key, val] = el;
      if (val && typeof val !== "object") {
        res[key] = val;
      }
      if (val && typeof val === "object") {
        const newVal = compactObject(val);
        res[key] = newVal;
      }
    });
  }

  return res;
};

console.log("result -", compactObject([null, 0, 5, [0], [false, 16]]));
console.log("result -", compactObject({ a: null, b: [false, 1] }));