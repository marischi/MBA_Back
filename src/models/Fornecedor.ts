import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  nome: string;
  tipo: string;
  idCategoria: string;
  telefone: string;
  celular: string;
  whatsapp: boolean;
  logradouro: string;
  numero: number;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  site: string;
  redeSocial: string;
  prazoEntrega: number;
};

const schema = new mongoose.Schema<UserType>({
  nome: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  idCategoria: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
  whatsapp: Boolean,
  logradouro: {
    type: String,
    required: true,
  },
  numero: {
    type: Number,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  bairro: {
    type: String,
    required: true,
  },
  cidade: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  site: String,
  redeSocial: String,
  prazoEntrega: {
    type: String,
    required: true,
  },
});

const modelName: string = 'Fornecedor';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
