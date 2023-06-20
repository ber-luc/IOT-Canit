const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server);

app.get('/generateMatrix', (req, res) => {
    const rows = parseInt(req.query.rows) || 20; // Fallback à 20 si non fourni
    const columns = parseInt(req.query.columns) || 10; // Fallback à 10 si non fourni

    const matrix = generateMatrix(rows, columns);
    res.send(matrix);
});

function generateMatrix(rows, columns) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            let decibelValue = Math.floor(Math.random() * 121);
            const rand = Math.random(); // Génère un nombre aléatoire entre 0 et 1
            if (rand < 0.90) {
                // 90% de chance de générer un nombre entre 0 et 50
                decibelValue = Math.floor(Math.random() * 51);
            } else if (rand < 0.98) {
                // 8% de chance de générer un nombre entre 50 et 60
                decibelValue = Math.floor(Math.random() * 11) + 50;
            } else {
                // 2% de chance de générer un nombre entre 60 et 120
                decibelValue = Math.floor(Math.random() * 61) + 60;
            }
            row.push(decibelValue);
        }
        matrix.push(row);
    }
    return matrix;
}


server.listen(3000, () => console.log('Server is running on port 3000'));
