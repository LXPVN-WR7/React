const mongoose = require('mongoose');

const clinica = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    endereco: {
        type: String,
        require: true,
    },
    telefone: {
        type: String,
        require: true,
    },
    especialidade: {
        type: String,
        require: true,
    },
});

const User = mongoose.model('User', clinica);

module.exports = User;