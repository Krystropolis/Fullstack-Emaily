const express = require('express');
const app = express();

app.get('/', (request, response) => {
	response.send({ hi: 'there' });
});

app.listen(5000);
