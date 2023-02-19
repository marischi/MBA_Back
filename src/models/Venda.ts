import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  idCliente: string;
  tipo: string;
  dataOrcamento: Date;
  validade: number;
  dataVenda: Date;
};

const schema = new mongoose.Schema<UserType>({
  idCliente: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    required: true,
  },
  dataOrcamento: {
    type: Date,
    required: true,
  },
  validade: {
    type: Number,
    required: true,
  },
  dataVenda: {
    type: Date,
    required: true,
  },
});

const modelName: string = 'Venda';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
