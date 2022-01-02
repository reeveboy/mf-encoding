export function arrayToString(array: Array<any>) {
  let ourString = [];

  array.forEach((group) => {
    group.forEach((element) => {
      ourString.push(element.toString());
    });
  });

  return ourString.join("");
}
