import { shuffle } from "@faustbrian/node-deterministic-array-shuffle";

import { IValidator } from "./validator";

export const round = ({ round, limit, validators }: {
  round: number;
  limit: number;
  validators: IValidator[];
}): IValidator[] =>
  shuffle(
    round.toString(),
    [...validators],
  ).sort((a: IValidator, b: IValidator) =>
    a.publicKey.localeCompare(b.publicKey)
  )
    .sort((a: IValidator, b: IValidator) => b.reputation - a.reputation).slice(
      0,
      limit,
    );
