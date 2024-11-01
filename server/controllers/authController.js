let users = [];

// Lógica para registrar um novo usuário
exports.register = (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }

    users.push({ username, password });
    return res.status(201).json({ message: 'Usuário registrado com sucesso' });
};

// Lógica para login
exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        return res.status(200).json({ message: 'Login bem-sucedido' });
    }
    return res.status(401).json({ message: 'Usuário ou senha incorretos' });
};

