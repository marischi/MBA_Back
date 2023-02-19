import { Request, Response } from 'express';
import Categoria from '../models/Categoria';
import { matchedData, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';

type Updates = {
  nome?: string;
};

export default {
  info: async (req: Request, res: Response) => {},
  editAction: async (req: Request, res: Response) => {},
  addAction: async (req: Request, res: Response) => {},
  delAction: async (req: Request, res: Response) => {},
};
