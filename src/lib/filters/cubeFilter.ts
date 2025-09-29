function cube(x: number): number {
  return x * x * x;
}

export function cubesFilt(tx: number[]): number[]{
    return tx.map(cube);
}