import { Request, Response } from 'express';
import Tamanho from '../models/Tamanho';
import { matchedData, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

type Updates = {
  cpf: string;
  nome: string;
  email: string;
  celular: string;
  logradouro: string;
  numero: number;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  whatsapp: boolean;
  dataNascimento: Date;
};

export default {
  info: async (req: Request, res: Response) => {},
  editAction: async (req: Request, res: Response) => {},
  addAction: async (req: Request, res: Response) => {},
  delAction: async (req: Request, res: Response) => {},
};
