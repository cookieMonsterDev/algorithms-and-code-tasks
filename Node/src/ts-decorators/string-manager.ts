/* 
  Before work with decorators enable
  -- "experimentalDecorators": true,                  
  -- "emitDecoratorMetadata": true, 
*/

// Split decorator
function split(value?: string | RegExp) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = descriptor.value;

    descriptor.value = function (...args: any[]) {
      args[0] = args[0].split(value);
      originalFunction.apply(this, args);
    };
  };
}

// Reverse decorator
function reverse(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalFunction = descriptor.value;

  descriptor.value = function (...args: any[]) {
    args[0] = args[0].reverse();
    originalFunction.apply(this, args);
  };
}

// Split decorator
function join(value?: string | RegExp) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalFunction = descriptor.value;

    descriptor.value = function (...args: any[]) {
      args[0] = args[0].join(value);
      originalFunction.apply(this, args);
    };
  };
}

//Usage example class
export class StringManager {
  @split("")
  @reverse
  @join("")
  print(str: string) {
    console.log(str);
  }
}
