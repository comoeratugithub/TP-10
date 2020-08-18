function cuantosTienenTres(fort) {
var i = 0
var palabras = 0
var palabrasLargas = 0
while(fort[i] != "."){
    while(fort[i] == " "){ i++;}
    palabras = "";
    while(fort[i] != " " && fort[i] != "."){
        palabras = palabras + fort[i];
        i++;
    }
    if(palabras.length > 3){
        palabrasLargas++;
    }
} return palabrasLargas;
}
