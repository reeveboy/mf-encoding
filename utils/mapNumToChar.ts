export function mapNumToChar(numArray: Array<Array<number>>) {
  let charArray = [];

  numArray.forEach((group) => {
    let charGroup = [];
    group.forEach((num) => {
      charGroup.push(String.fromCharCode(num));
    });
    charArray.push(charGroup);
  });

  return charArray;
}
