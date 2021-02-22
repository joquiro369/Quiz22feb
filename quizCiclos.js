function myFunction() {
    document.getElementById("quiz1").innerHTML = "Gracias por su atencion" ;
}







function myFunction() {
    var maximo, mayorque;
    maximo = document.getElementById("edad").value;
    mayorque = (maximo < 20) ? "Ingrese otro numero Mayor":"El numero es mayor a 20";
    document.getElementById("quiz2").innerHTML = mayorque + " QUIZ ";
}
