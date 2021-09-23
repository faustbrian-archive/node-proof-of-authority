import { hash as sha256 } from "@faustbrian/node-sha256";

export const work = (height: number): string =>
  sha256(height.toString()).toString("hex");
