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
            const decibelValue = Math.floor(Math.random() * 121);
            row.push(decibelValue);
            if (decibelValue > 110) {
                io.emit('loudNoise', { row: i, column: j, value: decibelValue });
            }
        }
        matrix.push(row);
    }
    return matrix;
}

server.listen(3000, () => console.log('Server is running on port 3000'));
