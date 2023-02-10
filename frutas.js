
let qtdVotos = 0
let nmrVotos1 = 0
let nmrVotos2 = 0
let banana =0
let total = 0





    

function manga() {
        nmrVotos1++
        document.getElementById("manga").innerHTML= "a manga é igual a " + nmrVotos1;
       
    }

function abacate() {
        nmrVotos2++
        document.getElementById("abacate").innerHTML= "a abacate é igual a " + nmrVotos2;
       
        
}
function Banana() {
    banana++
    document.getElementById("banana").innerHTML= "a banana é igual a " + banana;
}

function calcular() {
    total = (nmrVotos1 + nmrVotos2 + banana)
    document.getElementById("total").innerHTML= "o total de votos é igual a " + total
}
