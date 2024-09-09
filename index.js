const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET route with data response
app.get('/api/get', (req, res) => {
    const responseData = {
        message: 'GET request successful!',
        data: { id: 1, name: 'Sample Data' }
    };
    res.json(responseData); // Send JSON data as a response
});

// POST route with 200 status code
app.post('/api/post', (req, res) => {
    // You can handle incoming data here if needed
    res.sendStatus(200); // Respond with 200 OK status only
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
