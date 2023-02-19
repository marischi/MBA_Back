import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  idVenda: string;
  idEstoque: string;
  quantidade: number;
  precoUnitario: number;
};

const schema = new mongoose.Schema<UserType>({
  idVenda: {
    type: String,
    required: true,
  },
  idEstoque: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  precoUnitario: {
    type: Number,
    required: true,
  },
});

const modelName: string = 'ItensVenda';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
