const express = require("express");
const cors = require("cors");
const { resolve } = require("path");
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(resolve(__dirname, "client", "dist")));

app.post("/api/send-data", (req, res) => {
	console.log("Data sent: ", req.body);

	res.send({ success: true, mirror: req.body });
});

app.get("/api/user-data", (req, res) => {
	const user = {
		name: "Jim Bob",
		email: "jimthebob@gmail.com"
	};

	res.send(user);
});

app.get("/api/get-article", (req, res) => {
	const article = {
		title: "That Article Tho!",
		author: "Billy John",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis possimus ea dolore ipsa laudantium pariatur officia, autem quisquam mollitia reiciendis."
	};

	res.send(article);
});

app.get("*", (req, res) => {
	res.sendFile(resolve(__dirname, "client", "dist", "index.html"));
});

app
	.listen(PORT, () => {
		console.log("Server running at localhost:" + PORT);
	})
	.on("error", err => {
		console.log("Server Error:", err.message);
		console.log("Do you already have a server running on PORT:" + PORT);
	});
