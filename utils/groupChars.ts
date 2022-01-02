export function groupChars(string: string) {
  let array = [];

  for (let i = 0; i < string.length; i = i + 3) {
    let substr = string.slice(i, i + 3);
    const length = substr.length;
    if (length < 3) {
      for (let j = 0; j < 3 - length; j++) {
        substr += " ";
      }
    }
    array.push(substr);
  }

  return array;
}
