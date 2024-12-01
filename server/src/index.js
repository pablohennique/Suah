const AppServer = require('./appServer');

const app = new AppServer([]);

app.startListening();


// app.use('/users', require('./routes/userRoutes'));
