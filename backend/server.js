const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = 'your_secret_key'; 

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post('/api/signup', async (req, res) => {
    const { username,email, password } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    users.push({ username, email,password });
    res.status(201).json({ message: 'User registered successfully!' });
    console.log(users);
});

app.post('/api/login', async (req, res) => {
    console.log("Request Body:", req.body);

    const user = users.find(u => u.email === req.body.username);
    console.log("Matched User:", user); 

    if (!user) {
        return res.status(401).json({ message: 'Invalid email.' });
    }

    if (user.password !== req.body.password) { 
        return res.status(401).json({ message: 'Invalid password.' });
    }

    res.json({
        message: 'Login successful!',
        username: user.username, 
        email:user.email
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
