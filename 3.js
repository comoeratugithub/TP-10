3) var cancion = "Chancho va.";
var i = 0;
var caracteres = 0;
while(cancion[i] != "."){
    if(cancion[i] == "v" || cancion[i] == "V"){
        if(cancion[i + 1] == "a" || cancion[i + 1] == "A"){
            caracteres++;
        }
    }
    i++;
}

console.log("La cantidad de letra v seguidas por una a que se encontraron fue de : " + caracteres);
