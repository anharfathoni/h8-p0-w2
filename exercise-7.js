//Exercise 7 - LOOPING

//1. Menyusun Barisan Bintang

var row = prompt("masukkan jumlah baris")

for (var baris = 0; baris < row; baris++) {
    console.log("*")
}


//////////////////////////////////////////////////////////////////////////////
//2. Menyusun Barisan Bintang Dengan Nested Looping
var row;
var jumlah = "";
row = prompt("masukkan jumlah baris");

for (var baris = 0; baris < row; baris++) {
    for (var bintang = 0; bintang <= row; bintang++) {
        jumlah += "*"
    }
    console.log(jumlah)
    jumlah = "";
}


//////////////////////////////////////////////////////////////////////////////
//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var row;
var jumlah = "";
row = prompt("masukkan jumlah baris");

for (var baris = 0; baris < row; baris++) {
    for (var bintang = 0; bintang <= baris; bintang++) {
        jumlah += "*"
    }
    console.log(jumlah)
    jumlah = "";
}