import { validator } from "./validator";

it("should create a validator", () => {
  const subject = validator("publicKey", 100);

  expect(subject.publicKey).toStrictEqual("publicKey");
  expect(subject.reputation).toStrictEqual(100);
});
