import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { mongoConnect } from './database/mongo';
import mongoose from 'mongoose';
import fileupload from 'express-fileupload';
import cors from 'cors';
import apiRoutes from './routes';

dotenv.config();
mongoConnect();
mongoose.Promise = global.Promise;

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileupload());
server.use(express.static(__dirname + '../public'));

server.use('/', apiRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página não encontrada!');
});

server.listen(process.env.PORT, () => {
  console.log(`- Rodando no endereço: ${process.env.BASE}`);
});
