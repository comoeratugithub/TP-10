var letra = prompt("Ingresa una letra guachin");
var filo = "Alabemos a jesus o a moises,";
var i = 0;
var palabras = 0;
while(filo[i] != ","){
    while(filo[i] == " "){
        i++
    }
    palabras= "";
    while(filo[i] != " " && filo[i] != ","){
        palabras = palabras + filo[i];
        i++
    }
    if(palabras.length > 0 && palabras[0] == letra){
        alert("En el texto " + filo + " " + "las palabras que empiezan con la letra " + letra + " " + "son " + palabras);
        }
}
