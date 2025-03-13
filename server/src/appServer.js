const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { ErrorsMiddleware } = require('./middleware');

class AppServer {
	_app = express();
	_port = process.env.PORT || 3000;
	_server;

	constructor(controllers = []) {
		dotenv.config({ path: './src/.env' });
		this.connectionDatabase();
		this.initMiddleWares();
		this.initializeControllers(controllers);
		this.initErrorHandling();
	}

	connectionDatabase = async () => {
		try {
			const mongoUrl = process.env.DB_CONNECTION_STRING;
			const connect = await mongoose.connect(mongoUrl);
			await mongoose.connection.db.admin().command({ ping: 1 });

			console.log(
				"DB Connected: ",
				connect.connection.host,
				connect.connection.name
			);
		} catch(err) {
			console.error('An error occurred while connecting to the database:', err.message);
			process.exit(1);
		}
	};

	initializeControllers(controllers = []) {
		controllers.forEach(c => {
			this._app.use('/api', c._router);
		});
	}

	initMiddleWares() {
		this._app.use(cors());
		this._app.use(express.json());
	}

	initErrorHandling() {
		this._app.use(ErrorsMiddleware);
	}

	startListening() {
		const PORT = process.env.PORT || this._port;
		this._server = this._app.listen (PORT, () => {
			console.log(`Server started on ${PORT}!`);
		});
	}
}

module.exports = AppServer;