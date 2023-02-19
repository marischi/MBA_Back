import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  nome: string;
  email: string;
  hashSenha: string;
};

const schema = new mongoose.Schema<UserType>({
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
});

const modelName: string = 'Usuario';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
