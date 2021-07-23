const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.post("/register", (req, res) => {
	const { email, password } = req.body;

	res.status(201).json({ id: 1, email });
});

app.listen(PORT, () => {
	`app listening on PORT: ${PORT}`;
});
