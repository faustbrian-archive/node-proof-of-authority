export interface IValidator {
  publicKey: string;
  reputation: number;
}

export const validator = (publicKey: string, reputation: number): IValidator =>
  Object.freeze({ publicKey, reputation });
