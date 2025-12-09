const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8000;

const code = require('./pair');

// Fix: declare __path properly
const __path = process.cwd();

require('events').EventEmitter.defaultMaxListeners = 500;

// Body parser (should be before routes)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/code', code);

app.get('/pair', (req, res) => {
    res.sendFile(path.join(__path, 'pair.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__path, 'main.html'));
});

app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star ‼️

ᴘᴏᴡᴇʀᴅ ʙʏ ᴘᴀᴍᴜᴅɪɴᴀ ʀᴀᴠɪʜᴀʀᴀ🎭

Server running on http://localhost:${PORT}
    `);
});

module.exports = app;
