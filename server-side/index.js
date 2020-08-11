const express = require('express'); //to create backend API
const bodyParser = require('body-parser'); //allow backend to read & understand the data from frontend
const cors = require('cors'); //lets client talk to frontend
const morgan = require('morgan'); //to log all the incoming request

//Modules
const messages = require('./db/Messages');

//invoke express
const app = express();
const dbURI = 'mongodb+srv://admin:admin@todo.0kutd.mongodb.net/messages_db?retryWrites=true&w=majority';

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

app.get('/messages', (req, res) => {
	messages.getAll().then((messages) => {
		console.log('inside index.js');
		res.json(messages);
	});
});

app.post('/messages', (req, res) => {
	console.log(req.body);
	messages
		.create(req.body)
		.then((message) => {
			res.json(message);
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

//listen
const port = process.env.PORT || 3000;
app.listen(port);
