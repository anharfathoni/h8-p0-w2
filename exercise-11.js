//EXERCISE 11
//Balik Kata


var kata

function balikKata(kata) {
    var balik = ""
    var huruf = kata.length

    for (var i = huruf; i > 0; i--) {
        balik += kata[i - 1]
    }

    return balik;
}

console.log(balikKata("abcde"))
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS