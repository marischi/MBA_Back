import express, { Request, Response, Router } from 'express';
import AuthController from '../controllers/AuthController';
import Auth from '../middlewares/Auth';
import AuthValidator from '../helpers/AuthValidator';
import UsuarioValidator from '../helpers/UsuarioValidator';
import UsuarioController from '../controllers/UsuarioController';

const router = Router();

router.post('/usuario/signin', AuthValidator.signin, AuthController.signin);
router.post('/usuario/signup', AuthValidator.signup, AuthController.signup);

router.get('/usuario/me', Auth.private, UsuarioController.info);
router.put(
  '/usuario/me',
  UsuarioValidator.editAction,
  Auth.private,
  UsuarioController.editAction
);

export default router;
