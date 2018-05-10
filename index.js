const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get("/user-data", (req, res) => {
	const user = {
		name: "Jim Bob",
		email: "jimthebob@gmail.com"
	};

	res.send(user);
});

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>");
});

app
	.listen(PORT, () => {
		console.log("Server running at localhost:" + PORT);
	})
	.on("error", err => {
		console.log("Server Error:", err.message);
		console.log("Do you already have a server running on PORT:" + PORT);
	});
