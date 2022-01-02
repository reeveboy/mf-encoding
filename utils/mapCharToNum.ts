export function mapCharToNum(charArray: Array<string>) {
  let numArray = [];

  charArray.forEach((group) => {
    let codeGroup = [];
    group.split("").forEach((char) => {
      codeGroup.push(char.charCodeAt(0));
    });
    numArray.push(codeGroup);
  });

  return numArray;
}
