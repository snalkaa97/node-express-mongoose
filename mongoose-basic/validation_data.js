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

const apple = new Fruit({
	name: "Apple", //empty name kena validasi
	rating: 11,
	review: "Sweet",
});

apple.save(function (error) {
	if (error) {
		mongoose.connection.close();
		console.log(error);
	} else {
		mongoose.connection.close();
		console.log("berhail simpan buah apple kedalam db");
	}
});

//insert many
// const watermelon = new Fruit({
// 	name: "Watermelon",
// 	rating: 7,
// 	review: "Sweet",
// });
// const manggo = new Fruit({
// 	name: "Manggo",
// 	rating: 9,
// 	review: "Sweet",
// });
// const orange = new Fruit({
// 	name: "Orange",
// 	rating: 10,
// 	review: "Sweet",
// });

// Fruit.insertMany([watermelon, manggo, orange], function (error) {
// 	if (error) {
// 		console.log(error);
// 	} else {
// 		mongoose.connection.close(); //tutup koneksi
// 		console.log("Berhasil ditambahkan");
// 	}
// });
