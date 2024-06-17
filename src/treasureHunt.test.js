import { treasureHunt } from "./treasureHunt";
import {test, expect} from '@jest/globals'

test("", () => {
    const input = [
    55, 35, 23, 15, 33,
    53, 21, 23, 25, 42,
    43, 54, 43, 44, 13,
    42, 42, 25, 43, 22,
    55, 32, 43, 33, 33
    ];
    const result = [11, 55, 33, 43, 25, 42, 42]

    expect(treasureHunt(input)).toEqual(result);
  });

  test("", () => {
    const input = [
        41, 12, 15, 31, 32,
        14, 51, 12, 33, 22,
        13, 43, 42, 45, 52,
        54, 55, 35, 25, 44,
        24, 23, 21, 34, 53
    ];
    const result = [11, 41, 54, 34, 45, 44, 25, 22, 51, 24, 33, 42, 55, 53, 
        21, 14, 31, 13, 15, 32, 43, 35, 52, 23, 12, 12]

    expect(treasureHunt(input)).toEqual(result);
  });

  test("", () => {
    const input = [
        12, 31, 13, 14, 34,
        51, 24, 23, 24, 32,
        35, 21, 53, 54, 15,
        43, 55, 22, 33, 34,
        22, 44, 25, 55, 33
    ];
    const result = [11, 12, 31, 35, 15, 34, 54, 55, 33, 
        53, 25, 32, 21, 51, 22, 24, 24]

    expect(treasureHunt(input)).toEqual(result);
  });

