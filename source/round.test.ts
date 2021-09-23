import { round } from "./round";
import { IValidator, validator } from "./validator";

const publicKeys: string[] = [
  "02062f6f6d2aabafd745e6b01f4aa788a012c4ce7131312026bdb6eb4e74a464d2",
  "020aac4ec02d47d306b394b79d3351c56c1253cd67fe2c1a38ceba59b896d584d1",
  "0212a11582a28f178b906edbf8e8c447ce1ba86041ee731e595ae4d39ef034c2ad",
  "0215789ac26155b7a338708f595b97c453e08918d0630c896cbd31d83fe2ad1c33",
  "021b0f58eca7f123428a8647ffe0644a9454c510f066d3864c27d8c7ad8f5a8aa4",
  "02237692aa37cba4fe67d557973ed610ea175ea44d3f5cf4c3ce8ca7553ca1de17",
  "02257c58004e5ae23716d1c44beea0cca7f5b522a692df367bae9015a4f15c1670",
  "02294cdcedcf6a016fff62d9a8f8a156383b57ebc150dcc9490ddf6e5ea824614f",
  "022e13de675e14a409ce636706c76d42857c673d8dc0dda4e5bfceffdbf86e13c9",
  "022eedf9f1cdae0cfaae635fe415b6a8f1912bc89bc3880ec41135d62cbbebd3d3",
];

it("should create a list of validators that can mine", () => {
  const result = round({
    limit: 5,
    round: 1,
    validators: [
      validator(publicKeys[0]!, 1),
      validator(publicKeys[1]!, 2),
      validator(publicKeys[2]!, 3),
      validator(publicKeys[3]!, 4),
      validator(publicKeys[4]!, 5),
      validator(publicKeys[5]!, 0),
      validator(publicKeys[6]!, 0),
      validator(publicKeys[7]!, 0),
      validator(publicKeys[8]!, 0),
      validator(publicKeys[9]!, 0),
    ],
  });

  expect(result).toHaveLength(5);
  expect(result[0]!.publicKey).toStrictEqual(publicKeys[4]);
  expect(result[1]!.publicKey).toStrictEqual(publicKeys[3]);
  expect(result[2]!.publicKey).toStrictEqual(publicKeys[2]);
  expect(result[3]!.publicKey).toStrictEqual(publicKeys[1]);
  expect(result[4]!.publicKey).toStrictEqual(publicKeys[0]);
  expect(result.map((validator: IValidator) => validator.publicKey)).not
    .toStrictEqual(publicKeys);
});
