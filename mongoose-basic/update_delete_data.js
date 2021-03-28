const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/db-mongoose", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const fruitSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Nama buah wajib diisi"], //validation
	},
	rating: {
		min: 1,
		max: [10, "Tidak boleh lebih dari 10"],
		type: Number,
	},
	review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

Fruit.updateOne(
	{ _id: "6060ac1c509d5db94fa8dbbc" },
	{ name: "Watermelon" },
	function (error) {
		error ? console.log(error) : console.log("data updated");
		// mongoose.connection.close();
	}
);

Fruit.find(function (error, fruits) {
	if (error) {
		console.log(error);
	} else {
		mongoose.connection.close();
		// console.log(fruits);
		fruits.forEach(function (fruit) {
			console.log(fruit.name);
		});
	}
});

// Fruit.deleteOne({ _id: "6060ac1c509d5db94fa8dbbd" }, function (error) {
// 	error ? console.log(error) : console.log("data deleted");
// 	mongoose.connection.close();
// });
