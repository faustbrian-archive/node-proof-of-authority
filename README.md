**You can help the author become a full-time open-source maintainer by [sponsoring him on GitHub](https://github.com/sponsors/faustbrian).**

---

# @faustbrian/node-proof-of-authority

[![npm version](https://badgen.net/npm/v/@faustbrian/node-proof-of-authority)](https://npm.im/@faustbrian/node-proof-of-authority)

## Installation

```
pnpm install @faustbrian/node-proof-of-authority
```

## Usage

```ts
import { IValidator, mine, round, validator } from "@faustbrian/node-proof-of-authority";

const validators: IValidator[] = [
  validator(
    "02062f6f6d2aabafd745e6b01f4aa788a012c4ce7131312026bdb6eb4e74a464d2",
    100,
  ),
  validator(
    "020aac4ec02d47d306b394b79d3351c56c1253cd67fe2c1a38ceba59b896d584d1",
    99,
  ),
  validator(
    "0212a11582a28f178b906edbf8e8c447ce1ba86041ee731e595ae4d39ef034c2ad",
    95,
  ),
  validator(
    "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33",
    76,
  ),
  validator(
    "021b0f58eca7f123428a8647ffe0644a9454c510f066d3864c27d8c7ad8f5a8aa4",
    54,
  ),
];

const validatorsByRound: round({
  limit: 5,
  round: 1,
  validators,
});

mine({
  height: 1,
  slot: 1,
  validator: validators[4],
  validators: validatorsByRound,
}); // Will return a new SHA256 hash.

mine({
  height: 2,
  slot: 2,
  validator: validators[1],
  validators: validatorsByRound,
}); // Error because someone else was expected to mine.
```

## License

This is an open-sourced software licensed under the [AGPL-3.0-or-later](LICENSE).
