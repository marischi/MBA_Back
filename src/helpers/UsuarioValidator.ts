import { checkSchema } from 'express-validator';

export default {
  editAction: checkSchema({
    token: {
      notEmpty: true,
    },
    nome: {
      optional: true,
      trim: true,
      isLength: {
        options: { min: 2 },
      },
      errorMessage: 'Minimum 2 Characters Is Required',
    },
    email: {
      optional: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'Invalid Email',
    },
    password: {
      optional: true,
      isLength: {
        options: { min: 8 },
      },
      errorMessage: 'Minimum 8 Characters Is Required To Password',
    },
  }),
};
