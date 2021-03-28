const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.get("/", (req, res) => {
	const buah = [{ name: "apel" }, { name: "sirsak" }, { name: "pisang" }];
	{
		res.render("index", {
			name: "Alka",
			age: 23,
			buah: buah,
		});
	}
});
app.get("/profile/:name", (req, res) => {
	res.send(`nama saya : ${req.params.name}`);
});
app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
