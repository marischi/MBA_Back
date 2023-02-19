import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

type UserType = {
  idEstoque: string;
  idTamanho: string;
  idCor: string;
  quantidade: number;
};

const schema = new mongoose.Schema<UserType>({
  idEstoque: {
    type: String,
    required: true,
  },
  idTamanho: {
    type: String,
    required: true,
  },
  idCor: {
    type: String,
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
});

const modelName: string = 'GradeTamanhoCor';

export default mongoose.connection && mongoose.connection.models[modelName]
  ? mongoose.connection.models[modelName]
  : mongoose.model<UserType>(modelName, schema);
