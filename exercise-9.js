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

var name = "Anhar";
var age = 22;
var address = "Jln. ABC , Indonesia";
var hobby = "ngoding";

var fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);