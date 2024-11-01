// Configuração do banco de dados - simulação
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/realm', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Conectado ao banco de dados');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};

module.exports = connectDB;

