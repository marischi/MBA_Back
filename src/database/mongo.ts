import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.Promise = global.Promise;
export const mongoConnect = async () => {
  try {
    console.log('Conectando ao MongoDB...');
    await mongoose.connect(process.env.DATABASE as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.log('Erro Conexão MongoDB: ', error);
  }
};
