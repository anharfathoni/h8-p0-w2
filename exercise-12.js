//EXERCISE 12
//Konversi Menit

function konversiMenit(menit) {
    // you can only write your code here!
    var hour
    var minute
        //var minutefix="0"

    if (menit > 60) {
        hour = Math.floor(menit / 60)
        minute = menit - (hour * 60)
    } else {
        hour = 0
        minute = menit
    }

    if (minute < 10) {
        minute = "0" + minute
    }

    return (hour + ":" + minute)
}

// var a = prompt("masukkan menit")
// console.log(konversiMenit(a))
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00