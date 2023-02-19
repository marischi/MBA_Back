import { Request, Response } from 'express';
import { matchedData, validationResult } from 'express-validator';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../models/Usuario';

export default {
  signin: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.mapped() });
      return;
    }
    const data = matchedData(req);
    const user = await User.findOne({ email: data.email });
    if (!user) {
      res.json({
        error: { email: { msg: 'E-mail e/ou senha errados!' } },
      });
      return;
    }
    const match = await bcrypt.compare(data.password, user.hashSenha);
    if (!match) {
      res.json({
        error: { email: { msg: 'E-mail e/ou senha errados!' } },
      });
      return;
    }
    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 11);
    user.token = token;
    await user.save();
    res.json({ token, email: data.email });
  },
  signup: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.mapped() });
      return;
    }
    const data = matchedData(req);
    const user = await User.findOne({ email: data.email });
    if (user) {
      res.json({
        error: { email: { msg: 'E-mail já existe!' } },
      });
      return;
    }
    const hashSenha = await bcrypt.hash(data.password, 11);
    const payload = (Date.now() + Math.random()).toString();
    const token = await bcrypt.hash(payload, 11);
    const newUser = new User({
      nome: data.nome,
      email: data.email,
      hashSenha,
      token,
    });
    await newUser.save();
    res.json({ token });
  },
};
