function contarLetraP(paranoia) {
var i = 0;
var palabras;
var palabrasConP = 0;
while(paranoia[i] != "."){
    while(paranoia[i] == " "){
        i++
    }
    palabras= "";
    while(paranoia[i] != " " && paranoia[i] != "."){
        palabras = palabras + paranoia[i];
        i++
    }
        if(palabras.length > 0 && palabras[0].toUpperCase() == "P"){
        palabrasConP++;
        }
} return palabrasConP

}
