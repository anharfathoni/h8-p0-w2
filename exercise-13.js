//EXERCISE 13
//X dan O

//var kata = prompt("masukkan kata")
function xo(str) {
    countx = 0
    counto = 0
    var huruf = str.length
        //console.log(huruf)

    for (var i = 0; i < huruf; i++) {
        if (str[i] === 'x') {
            countx += 1
        } else if (str[i] === 'o') {
            counto += 1
        }
    }
    //console.log(countx)
    //console.log(counto)
    return (countx == counto)
}
//console.log(xo(kata))

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true