// Función zfill para rellenar con ceros a la izquierda
function zfill(number, width) {
    var str = number.toString();
    while (str.length < width) {
        str = '0' + str;
    }
    return str;
}

var minutos = 0;
var hora = 0;

// Obtenemos el botón por su id
var oneclikButton = document.getElementById('oneclik');

// Añadimos un evento de click al botón
oneclikButton.addEventListener('click', function() {
    // Cuando se hace clic en el botón, se imprime "Hola" en la consola
    contarSegundos();
});

function contarSegundos() {
    let segundos = 1;
    minutos++ ;
    const intervalo = setInterval(function() {
        segundos=zfill(segundos,2);
        var secondsElemtens = document.getElementById("second");
        secondsElemtens.textContent=segundos
        console.log(segundos);
        segundos++;
    }, 1000); // Ejecutar cada segundo (1000 milisegundos)

    // Detener el contador después de cierto tiempo (por ejemplo, 10 segundos)
    setTimeout(function() {
        clearInterval(intervalo);
        console.log("Contador detenido después de 10 segundos");
        if (time > 9000){
            segundos = 0;
            minutos = zfill(minutos, 2); // Utilizamos la función zfill para rellenar con ceros
            var minutesElement = document.getElementById("minutes"); // Obtenemos el elemento HTML por su id
            minutesElement.textContent = minutos; // Actualizamos el contenido del elemento HTML con los minutos formateados
            console.log(minutos);
            if (minutos == 60){
                hora += 1;
                minutos = 0;
                console.log(hora);
            }
        }
        contarSegundos();
        time = 10000;
    }, time = 10000); // 10 segundos en milisegundos
}
