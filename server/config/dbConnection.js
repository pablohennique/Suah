const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
		await mongoose.connection.db.admin().command({ ping: 1 });

    console.log(
      "DB Connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    throw new Error("Database connection failed");
  }
};

module.exports = connectDb;