// const fs = require("fs");

// fs.copyFileSync("text.txt", "text2.txt");
// fs.writeFileSync("text3.txt", "hello");
const superheroes = require("superheroes");

superheroes.all;
//=> ['3-D Man', 'A-Bomb', …]

const nameHero = superheroes.random();
//=> 'Spider-Ham'
// console.log(nameHero);

// for (let index = 0; index < 10; index++) {
// 	console.log(superheroes.random());
// }
// import Module from "./module";
const op = require("./module");

const module_tambah = op.tambah(10, 5);
const module_kali = op.kali(10, 10);
const module_title = op.title;
console.log(module_title);
console.log(`penjumlahan = ${module_tambah}`);
console.log(`perkalian = ${module_kali}`);

// const module_tambah_2 = Module.tambah(10, 5);
// console.log(module_tambah_2);
