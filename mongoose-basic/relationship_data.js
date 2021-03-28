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

const peopleSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Nama wajib diisi"], //validation
	},
	age: {
		type: Number,
	},
	favoriteFruit: fruitSchema,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const People = mongoose.model("People", peopleSchema);

const strawberry = new Fruit({
	name: "Strawberry",
	rating: 8,
	review: "Sweet",
});

strawberry.save(function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log("berhail simpan buah kedalam db");
		// mongoose.connection.close();
	}
});

const people = new People({
	name: "Alka",
	age: 23,
	favoriteFruit: strawberry,
});
people.save(function (error) {
	if (error) {
		console.log(error);
	} else {
		console.log("berhail simpan people kedalam db");
	}
});

// mongoose.connection.close();
