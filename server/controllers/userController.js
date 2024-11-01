let users = [];

// Lógica para obter todos os usuários
exports.getAllUsers = (req, res) => {
    res.json(users);
};

// Lógica para obter um usuário específico
exports.getUserByUsername = (req, res) => {
    const user = users.find(u => u.username === req.params.username);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
};

