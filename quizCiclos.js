 
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
    mayorque = (maximo < 20) ? "INCORRECTO Ingrese otro numero Mayor":" CORRECTO El numero es mayor a 20";
    document.getElementById("quiz2").innerHTML = mayorque + " Gracias ";
}



var num = 20;
var max = prompt("Digite un numero del 1 al 30");
max = parseInt(max);
while (max < num) {
    alert("Incorrecto");
    max = parseInt (prompt("Digite un numero MAYOR por favor"));
    document.getElementById("quiz6").innerHTML = " El ejercicio ha terminado Gracias!! ";
}
alert("Correcto");

