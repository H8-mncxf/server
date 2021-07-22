const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/", (req, rest) => {
	const { email, password } = req.body;

	rest.status(200).json({
		email,
		token: "initoken",
	});
});

app.listen(PORT, () => {
	`app listening on PORT: ${PORT}`;
});
