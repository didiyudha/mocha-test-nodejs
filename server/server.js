const express = require('express');

var app = express();

app.get('/', (req, res) => {
	res.status(404).json({
		status: 'NOT FOUND',
		message: 'Page not found'
	});
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .json([
      {
        username: 'didiyudha',
        email: 'didiyudha@gmail.com'
      },
      {
        username: 'yaniindrasari',
        email: 'yaniindrasari@gmail.com'
      },
    ]);
});

app.listen(3000);
module.exports.app = app;
