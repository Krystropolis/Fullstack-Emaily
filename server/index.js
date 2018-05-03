const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send({ deployment: 'the second' });
});

// set port dynamically
const PORT = process.env.PORT || 5000;
app.listen(PORT);
