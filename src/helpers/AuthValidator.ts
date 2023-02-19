import { checkSchema } from 'express-validator';

export default {
  signup: checkSchema({
    nome: {
      notEmpty: true,
      trim: true,
      isLength: {
        options: {
          min: 2,
        },
      },
      errorMessage: 'Nome precisa de pelo menos 2 caracteres.',
    },
    email: {
      notEmpty: true,
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido.',
    },
    password: {
      isLength: {
        options: { min: 2 },
      },
      errorMessage: 'Senha precisa de pelo menos 2 caracteres.',
    },
  }),
  signin: checkSchema({
    email: {
      isEmail: true,
      normalizeEmail: true,
      errorMessage: 'E-mail inválido.',
    },
    password: {
      isLength: {
        options: { min: 2 },
      },
      errorMessage: 'Senha precisa de pelo menos 2 caracteres.',
    },
  }),
};
