'use strict';

require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Render React page
app.get('/*', (req, res) => {
	res.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.listen(PORT, error => {
	error
		? console.error(error)
		: console.info(
				`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
		  );
});

module.exports = app;
