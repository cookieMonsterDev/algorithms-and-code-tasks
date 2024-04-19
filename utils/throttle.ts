const throttle = (fn: Function, delay: number) => {
  let isBlocked = false;
  return (...args: any[]) => {
    if (isBlocked) return;

    fn(...args);
    isBlocked = true;

    setTimeout(() => {
      isBlocked = false;
    }, delay);
  };
};
