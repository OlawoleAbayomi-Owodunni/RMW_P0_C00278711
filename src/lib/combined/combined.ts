import { cubeFilter as peerCube } from "../../../node_modules/peer-filter-c00283152";
import { cubesFilt as myCubes } from "$lib/filters/cubeFilter";

export function peerCube(x: number[]) : number[]
{
    return x.map(num => num * num * num);
}

function cube(x: number): number {
  return x * x * x;
}

export function myCubes(tx: number[]): number[]{
    return tx.map(cube);
}