const distancia = parseInt (prompt ("Distancia a la que se encuentra: "));

if (distancia > 100000){
    alert ("Viajar en avión")
} else
if (distancia > 30000){
    alert ("Viajar en auto")
} else
if (distancia > 10000){
    alert ("Viajar en colectivo")
} else
if (distancia > 1000){
    alert ("Viajar en bicicleta")
} else {
    alert ("Viajar a pie")
}



