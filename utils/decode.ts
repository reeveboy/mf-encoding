import { multiply, inv } from "mathjs";
import { arrayToString } from "./arrayToString";
import { mapNumToChar } from "./mapNumToChar";
import { round } from "./round";

export function decode(encodedArray: Array<number>) {
  const key = inv([
    [2, 3, 2],
    [1, 4, 2],
    [5, 2, 3],
  ]);

  let decodedArray = [];

  encodedArray.forEach((group) => {
    decodedArray.push(multiply(group, key));
  });

  return arrayToString(mapNumToChar(round(decodedArray)));
}
