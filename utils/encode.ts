import { multiply } from "mathjs";
import { groupChars } from "./groupChars";
import { mapCharToNum } from "./mapCharToNum";

export function encode(msg: string) {
  const key = [
    [2, 3, 2],
    [1, 4, 2],
    [5, 2, 3],
  ];
  const groupCharsArray = groupChars(msg);

  const numArray = mapCharToNum(groupCharsArray);

  let encodedArray = [];

  numArray.forEach((group) => {
    encodedArray.push(multiply(group, key));
  });

  return encodedArray;
}
