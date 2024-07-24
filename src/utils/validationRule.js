import * as Yup from 'yup';

const EMAIL_REGREX = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

// const passwordRegex = /.*(?=.{8,})(?=.*[a-z])
// (?=.*[A-Z])(?=.*[0-9])(?=.*[\][! "#$%&'()*+,-_.:;<=>?@^_`{|}~]).*$/;

const emailValidation = Yup.string().trim().matches(EMAIL_REGREX, 'Invalid email address')
  .required('Email address is required.');

const passwordValidation = Yup.string()
  .trim()
  .required('Password is required.');
// .matches(passwordRegex, { message: 'Invalid Password format.' });

const confirmPasswordValidation = Yup.string()
  .trim()
  .required('Confirm Password is required.')
  .oneOf([Yup.ref('password'), null], 'Passwords must match');

const mfaCodeValidation = Yup.string()
  .trim()
  .min(6, 'Enter valid MFA')
  .required('MFA code is required.');

export {
  emailValidation,
  passwordValidation,
  confirmPasswordValidation,
  mfaCodeValidation,
};
