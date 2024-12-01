const AppServer = require('./appServer');
const {
	UserController
} = require('./controllers');

const app = new AppServer([
	new UserController()
]);

app.startListening();