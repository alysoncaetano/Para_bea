function numeros(text, letra) {
let numero = 0
 for (let i = 0; i < text.length; i++) {
 if( text[i] == letra){
    numero++
 }
 }
 if(numero % 2 == 0){
    return "Um excelente texto"
 }else {
    return "Vixi, mude de texto"
 }

}
console.log(numeros("Eu quero chocolate" , "u"))