6) var filo = "Para ser feliz primero hay que pedir permiso.";
var i = 0;
var palabras;
var palabrasConP = 0;
while(filo[i] != "."){
    while(filo[i] == " "){
        i++
    }
    palabras= "";
    while(filo[i] != " " && filo[i] != "."){
        palabras = palabras + filo[i];
        i++
    }
        if(palabras.length > 0 && palabras[0].toUpperCase() == "p"){
        palabrasConP++;
        }
}
console.log("La cantidad de palabras que empiezan con la letra P es de: " + palabrasConP);
