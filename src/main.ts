import path from 'path'
import {visit} from 'unist-util-visit'

type a = {
  aaa: number;
  bbb: number;
}

export const test: a = {
  aaa: 1,
  bbb: 2
}

console.log(path);
console.log(visit);
