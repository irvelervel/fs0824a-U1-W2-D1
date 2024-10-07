// la direttiva console.log() vi permette di STAMPARE un messaggio nella CONSOLE
// del browser
console.log('Hello World!')
console.log('la somma di 10 e 5', 10 + 5)

// il nostro scopo da sviluppatori è creare ALGORITMI
// un ALGORITMO è una sequenza numerata di passaggi che portano alla risoluzione
// di un problema; dato lo stesso problema, con lo stesso algoritmo è possibile
// risolverlo infinite volte.

// VARIABILI
// una variabile è una "scatola", una "bacinella", un "contenitore" per un risultato
// temporaneo. Dentro ad una variabile si inserisce un "valore".
// Si chiama "variabile" perchè il suo contenuto (il suo valore) può cambiare nel
// corso della sua vita.

// le variabili in JS si definiscono con la parola chiave "let"
let myFantasticDog // ho creato una variabile di nome "dog"
// di solito in JS i nome delle variabili NON cominciano con numeri
// in JS per le variabili si segue la nomenclatura "camelCase"
// myDog, newElement, createMoreKittens
myFantasticDog = 'Pluto' // ho assegnato alla variabile myFantasticDog il valore di "Pluto"
// volendo potete condensare questi due passaggi in uno solo:
let myAmazingCat = 'Tom' // la variabile viene GIÀ inizializzata con un contenuto

let age = 25 // la variabile age contiene un NUMERO, il colore è diverso!

// test = 'ok!' // ERRORE!
// let test
// ho commentato le due righe sopra perchè darebbero ERRORE!
// PRIMA si DICHIARA una variabile (con let), POI la si utilizza

// ho dato un "titoletto" al console.log()
console.log('age prima', age) // qui "age" non è una stringa!

age = 50 // qui il NUOVO valore di age è 50

console.log('age dopo', age)

// TIPI DI DATO
let stringExample = 'ciao' // stringhe
let numberExample = 145 // numeri
let booleanExample = true // booleano, un valore true/false
// un valore booleano serve a dichiarare la veridicità/falsità di un'espressione

let sum = 40 + 10 // sum è la somma di 40 e 10
console.log('il valore di sum è', sum) // 50

let anotherSum = '40' + '10'
console.log('somma si due stringhe', anotherSum) // '4010' :O

// OPERATORI MATEMATICI
let first = 5
let second = first // 5 pure lui!
let total = first + second // 10
console.log('somma di più valori', total)
let superTotal = total + first // 15
console.log('somma ulteriore', superTotal)

let subtraction = superTotal - 12
console.log('dopo la sottrazione...', subtraction) // 3

let multiplication = first * 5 // 25
let division = superTotal / 7
console.log('divisione', division)
// operatore MODULO
let resto = superTotal % 7
console.log('resto della divisione', resto)
let anotherResto = 29 % 3 // 2

24 % 2 // 0 -> numero PARI
25 % 2 // 1 -> numero DISPARI
77 % 2 // 1
30466 % 2 // 0

// popup fastidiosissimo:
// window.alert('CIAONE!' + anotherResto) // oppure anche semplicemente alert() senza window.

// concatenazione di stringhe con uno scopo:
let myName = 'Stefano'
let myRegion = 'FVG'
let myAge = 19

let person = myName + myRegion + myAge // 'StefanoFVG19'
let betterPerson =
  'Io mi chiamo ' +
  myName +
  ', vivo in ' +
  myRegion +
  ', ho ' +
  myAge +
  ' anni.'

console.log(betterPerson) // 'Io mi chiamo Stefano, vivo in FVG, ho 19 anni.'

myName = 'Aldo'
myRegion = 'Lombardia'
myAge = 66

console.log(betterPerson) // come prima! perchè betterPerson non è stata riassegnata
// anche person sarebbe rimasto uguale
