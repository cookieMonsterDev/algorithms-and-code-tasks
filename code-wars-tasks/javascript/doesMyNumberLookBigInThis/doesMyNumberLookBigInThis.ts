function narcissistic(value: number): boolean {
    let valueString = String(value).split('').map(Number);
    return value == valueString.map(num => Math.pow(num, valueString.length)).reduce((a, b) => a + b);
}