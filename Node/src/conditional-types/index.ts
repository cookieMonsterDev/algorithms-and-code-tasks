// gen case for funcs
const func = <T extends string | number>(arg: T): T => {
  return arg;
}

const first = func(123);
const second = func('test') 
