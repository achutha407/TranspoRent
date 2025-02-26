const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'transporent_db'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database.');
});

app.use(bodyParser.urlencoded({ extended: true }));

// Signup route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, password], (err, result) => {
        if (err) {
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).send('Error: Email already exists');
            }
            return res.status(500).send('Server error');
        }
        res.send('Signup successful!');
    });
});

// Login route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM users WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if (err) return res.status(500).send('Server error');
        if (results.length === 0) return res.status(401).send('Invalid credentials');
        res.send(`Welcome, ${results[0].username}!`);
    });
});

// Start the server
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
