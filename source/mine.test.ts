import { mine } from "./mine";
import { round } from "./round";
import { IValidator, validator } from "./validator";

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

const execute = (
  height: number,
  slot: number,
  validator: IValidator,
): { validator: IValidator; hash: string } =>
  mine({
    height,
    slot,
    validator,
    validators: round({
      limit: 5,
      round: 1,
      validators,
    }),
  });

it("should mine a new hash", () => {
  const { hash, validator } = execute(1, 0, validators[0]!);
  expect(hash).toStrictEqual(
    "6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b",
  );
  expect(validator.publicKey).toStrictEqual(validators[0]!.publicKey);
  expect(validator.reputation).toStrictEqual(100);
});

it("should fail to mine if the validator doesn't match", () => {
  expect(() => execute(1, 2, validators[1]!)).toThrowError(
    "The expected and actual validator are different.",
  );
});

it("should fail to mine if the reputation doesn't match", () => {
  expect(() => execute(2, 1, validators[2]!)).toThrowError(
    "The expected and actual reputation are different.",
  );
});
