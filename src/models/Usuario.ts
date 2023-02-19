import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUsuario extends Document {
  nome: string;
  email: string;
  hashSenha: string;
  token: string;
}

const usuarioSchema = new Schema<IUsuario>({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  hashSenha: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

const modelName: string = 'Usuario';
const isConnected = mongoose.connection;
const modelExists = mongoose.connection.models[modelName];
const modelExistsInConnection = isConnected && modelExists;

const Usuario = modelExistsInConnection
  ? mongoose.connection.models[modelName]
  : mongoose.model<IUsuario>(modelName, usuarioSchema);

export default Usuario as Model<IUsuario>;
