//Exercise 6 - LOOPING

//1. Melakukan Looping Menggunakan While
var n = 2
console.log("LOOPING PERTAMA")
while (n <= 20) {
    console.log(n + " - I love coding")
    n += 2
}

console.log("LOOPING KEDUA")
n = 20
while (n >= 2) {
    console.log(n + " - I will become fullstack developer")
    n -= 2
}

//////////////////////////////////////////////////////////////////////////////
//2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA")
for (var i = 1; i <= 20; i++) {
    console.log(i + " - I love coding")
}
console.log("LOOPING KEDUA")
for (var i = 20; i >= 1; i--) {
    console.log(i + " - I will become fullstack developer")
}



//////////////////////////////////////////////////////////////////////////////
//3. Angka Ganjil dan Genap

console.log("contoh ganjil-genap")
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log("GENAP")
    } else {
        console.log("GANJIL")
    }
}

console.log("counter tambah 2")
for (var i = 1; i <= 100; i += 2) {
    if (i % 3 === 0) {
        console.log('"3 KELIPATAN 3"')
    } else {
        console.log("")
    }
}

console.log("counter tambah 5")
for (var i = 1; i <= 100; i += 5) {
    if (i % 6 === 0) {
        console.log('"6 KELIPATAN 6"')
    } else {
        console.log("")
    }
}

console.log("counter tambah 9")
for (var i = 1; i <= 100; i += 9) {
    if (i % 10 === 0) {
        console.log('"10 KELIPATAN 10"')
    } else {
        console.log("")
    }
}