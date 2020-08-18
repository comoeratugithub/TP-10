var letraComienzo = prompt("Ingresa una letra para comenzar");
var letraFin = prompt("Ingresa la letra para el final");
var filo = "El peronismo es para los giles,";
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
    if(palabras.length > 0 && palabras[0] == letraComienzo && filo[i-1] == letraFin ){
        alert("En el texto " + filo + " " + "las palabras que empiezan con la letra " + letraComienzo + " " + "y terminan con la letra "+ letraFin + " " + "son " + palabras);
        }
}
