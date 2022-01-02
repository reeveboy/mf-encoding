export function round(numArray: Array<Array<number>>) {
  let roundedArray = [];

  numArray.forEach((group) => {
    let roundGroup = [];
    group.forEach((num) => {
      roundGroup.push(Math.round(num));
    });
    roundedArray.push(roundGroup);
  });

  return roundedArray;
}
