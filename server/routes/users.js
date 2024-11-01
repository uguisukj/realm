const express = require('express');
const router = express.Router();
const { getAllUsers, getUserByUsername } = require('../controllers/userController');

// Rota para obter todos os usuários
router.get('/', getAllUsers);

// Rota para obter um usuário específico
router.get('/:username', getUserByUsername);

module.exports = router;

