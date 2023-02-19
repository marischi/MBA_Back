import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  nome: string;
};

const schema = new mongoose.Schema<UserType>({
  nome: {
    type: String,
    required: true,
  },
});

const modelName: string = 'Tamanho';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
