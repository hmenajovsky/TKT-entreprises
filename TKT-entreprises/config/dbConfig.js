//! DB Config

const mongoose = require("mongoose");

// For issues with connecting to localhost:27017
// const DB_URI = "mongodb://127.0.0.1/RubberDucks"
const DB_URI = "mongodb://localhost/tkt-entreprises";

mongoose
	.connect(DB_URI)
	.then((db) => {
		console.log(`Connected to "${db.connection.name}" `);
	})
	.catch((err) => console.error(err));