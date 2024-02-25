// Función zfill para rellenar con ceros a la izquierda
function zfill(number, width) {
    var str = number.toString();
    while (str.length < width) {
        str = '0' + str;
    }
    return str;
}

// Variables para minutos y horas

var horas = 0;

// Obtenemos el botón por su id
var oneclikButton = document.getElementById('oneclik');

// Añadimos un evento de click al botón
oneclikButton.addEventListener('click', function() {
    // Cuando se hace clic en el botón, se llama a la función contarSegundos
    contarSegundos();
});

function contarSegundos() {
    let segundos = 0;
    var minutos = 1;
    const intervalo = setInterval(function() {
        // Rellenamos los segundos con ceros a la izquierda
        var segundosFormateados = zfill(segundos, 2);

        // Actualizamos el elemento HTML con los segundos formateados
        var secondsElement = document.getElementById("second");
        secondsElement.textContent = segundosFormateados;

        // Incrementamos los segundos
        segundos++;

        // Si los segundos alcanzan 60, reiniciamos los segundos y actualizamos los minutos
        if (segundos == 10) {
            segundos = 0;
            
            minutos = zfill(minutos, 2); // Rellenamos los minutos con ceros a la izquierda

            // Actualizamos el elemento HTML con los minutos formateados
            var minutesElement = document.getElementById("minutes");
            minutesElement.textContent = minutos;
            minutos++;
        }
            // Si los minutos alcanzan 60, reiniciamos los minutos y actualizamos las horas
        if (minutos == 2) {
                minutos = 0;
              
                horas = zfill(horas, 2); // Rellenamos las horas con ceros a la izquierda

                // Actualizamos el elemento HTML con las horas formateadas
                var hoursElement = document.getElementById("hours");
                hoursElement.textContent = horas;
                horas++;
        }
    }, 1000); // Ejecutar cada segundo (1000 milisegundos)
}
