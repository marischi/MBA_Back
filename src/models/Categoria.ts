import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICategoria extends Document {
  nome: string;
}

const catSchema = new Schema<ICategoria>({
  nome: {
    type: String,
    required: true,
  },
});

const modelName: string = 'Categoria';
const isConnected = mongoose.connection;
const modelExists = mongoose.connection.models[modelName];
const modelExistsInConnection = isConnected && modelExists;

const Categoria = modelExistsInConnection
  ? mongoose.connection.models[modelName]
  : mongoose.model(modelName, catSchema);

export default Categoria as Model<ICategoria>;
