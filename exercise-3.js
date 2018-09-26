//EXERCISE 3
//Menggunakan If Else

var nama = "Anhar"
var peran = "Ksatria"

if (nama.length == 0) {
    console.log("Nama harus diisi!")
} else {
    if (peran.length == 0) {
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!")
    } else {
        if (peran == "Ksatria") {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Ksatria " + peran + ", kamu dapat menyerang dengan senjatamu!")
        } else if (peran == "Ksatria") {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.")
        } else {
            console.log("Selamat datang di Dunia Proxytia, ", nama)
            console.log("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
        }
    }
}