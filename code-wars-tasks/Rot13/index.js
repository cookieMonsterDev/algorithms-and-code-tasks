function rot13(message) {
  const replacer = (match) => {
    const isUpperCase = match === match.toUpperCase();
    const code = match.charCodeAt(0);
    const shiftedCode = isUpperCase
      ? ((code - 65 + 13) % 26) + 65
      : ((code - 97 + 13) % 26) + 97;

    return String.fromCharCode(shiftedCode);
  };
  const newM = message.replace(/[A-Za-z]/g, replacer);
  return newM;
}

console.log(rot13("az"));
