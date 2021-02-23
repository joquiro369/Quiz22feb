
var five = parseInt ( prompt ("Ingrese un numero"));

if (five < 5) {
    document.getElementById("quiz1").innerHTML =  " INCORRECTO : Ingrese otro numero";
}
else {
   var quiz = 0;
   for (var num = 0; num < five; num+=3) {
     quiz = quiz + 3;  
    document.write("<p>"+ "La cadena de nuemeros con intervalo de tres es : " + quiz); 
    // document.getElementById("quiz4").innerHTML = "El resultado del Ejercicio es : " + quiz;     
   } 
    
    var num = 0;
    var quiz = 0;
    do {
        num += 3; 
        quiz = quiz + num;
    } while (num < five);
    document.getElementById("quiz3").innerHTML = "El resultado del Ejercicio es : " + quiz; 
} 

    
                                               
function myFunction() {
    var maximo, mayorque;
    maximo = document.getElementById("edad").value;
    mayorque = (maximo < 20) ? "Ingrese otro numero Mayor":"El numero es mayor a 20";
    document.getElementById("quiz2").innerHTML = mayorque + " QUIZ ";
}


var numero = 20;
var maximo = parseInt (prompt("Digite un numero por favor"));

for (var i = 0; i < maximo; i++) {
     numero[i] = prompt("El maximo valor es" + (i+1)) ; 
     document.getElementById("quiz5").innerHTML = maximo + " Restultado maximo ";
}


