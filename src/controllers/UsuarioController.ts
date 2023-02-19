import { Request, Response } from 'express';
import Usuario from '../models/Usuario';
import { matchedData, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

type Updates = {
  nome?: string;
  email?: string;
  hashSenha?: string;
  token?: string;
};

export default {
  info: async (req: Request, res: Response) => {
    let token: any = req.query.token;
    let user = await Usuario.findOne({ token });
    if (user) {
      res.json({
        nome: user.nome,
        email: user.email,
      });
      return;
    } else {
      res.json({ error: 'no user' });
      return;
    }
  },
  editAction: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({ error: errors.mapped() });
      return;
    }
    const data = matchedData(req);
    let updates: Updates = { ...data };
    if (data.nome) {
      updates.nome = data.nome;
    }
    if (data.email) {
      const emailCheck = await Usuario.findOne({ email: data.email });
      if (emailCheck) {
        res.json({ error: 'E-mail já existente' });
        return;
      } else {
        updates.email = data.email;
      }
    }
    if (data.password) {
      updates.hashSenha = await bcrypt.hash(data.password, 11);
    }

    await Usuario.findOneAndUpdate({ token: data.token }, { $set: updates });
    res.json({});
  },
};
