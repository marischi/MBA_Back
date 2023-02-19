import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
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

const schema = new mongoose.Schema<UserType>({
  cpf: {
    type: String,
    required: true,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
  },
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
  whatsapp: Boolean,
  datanascimento: Date,
});

const modelName: string = 'Cliente';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
