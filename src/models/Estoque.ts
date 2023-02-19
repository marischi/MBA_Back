import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  descricao: string;
  precoVenda: number;
  tipo: string;
  prazoEntrega: number;
};

const schema = new mongoose.Schema<UserType>({
  descricao: {
    type: String,
    required: true,
  },
  pecoVenda: {
    type: Number,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  prazoEntrega: {
    type: Number,
    required: true,
  },
  whatsapp: Boolean,
  datanascimento: Date,
});

const modelName: string = 'Estoque';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
