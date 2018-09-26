//Exercise 9 - Mengenal Penggunaan Function

//Tugas 1
function shoutOut() {
    return ("Halo Function")
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console


//////////////////////////////////////////////////////////////////////////////
//Tugas 2
function calculateMultiply(a, b) {
    var c = a * b
    return c
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian); // Menampilkan angka 30

//////////////////////////////////////////////////////////////////////////////
//Tugas 3
function processSentence(a, b, c, d) {
    var full = "Nama saya " + a + ", umur saya " + b + " tahun, alamat saya di " + c + ", dan saya punya hobby yaitu " + d + "!"
    return full
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"