import validator from "validator";

export function sanitizeInput(input: string) {
  return validator.escape(input);
}

export function validateEmail(input: string) {
  if (!validator.isEmail(input)) throw Error("Input is not an email");
}
