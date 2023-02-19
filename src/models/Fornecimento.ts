import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  idCategoria: string;
  idEstoque: string;
};

const schema = new mongoose.Schema<UserType>({
  idCategoria: {
    type: String,
    required: true,
  },
  idEstoque: {
    type: String,
    required: true,
  },
});

const modelName: string = 'Fornecimento';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
