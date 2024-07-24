export const hasUpperCase = (value) =>
  new RegExp(/(?=.*[a-z])(?=.*[A-Z])/).test(value);

export const hasNumber = (value) => new RegExp(/[0-9]/).test(value);

export const hasSpecialChar = (value) =>
  new RegExp(/[!#@$%^&*)(+=._-]/).test(value);

export const isFormInvalid = (touched, errorMessage) =>
  touched && errorMessage && errorMessage.length > 0;
