const express = require('express'); //to create backend API
const bodyParser = require('body-parser'); //allow backend to read & understand the data from frontend
const cors = require('cors'); //lets client talk to frontend
const morgan = require('morgan'); //to log all the incoming request

//invoke express
const app = express();

//invoke middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));

//routes
app.get('/', (req, res) => {
	res.json({
		message: 'Hello! 😁',
	});
});

//listen
const port = process.env.PORT || 3000;
app.listen(port);
