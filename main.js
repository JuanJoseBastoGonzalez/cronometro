// Función zfill para rellenar con ceros a la izquierda
function zfill(number, width) {
    var str = number.toString();
    while (str.length < width) {
        str = '0' + str;
    }
    return str;
}

// Variables para minutos y horas
var minutos = 0;
var horas = 0;
var intervalo;

// Obtenemos el botón por su id
var oneclikButton = document.getElementById('oneclik');

// Añadimos un evento de click al botón
oneclikButton.addEventListener('click', function() {
    // Limpiamos cualquier intervalo anterior antes de comenzar uno nuevo
    clearInterval(intervalo);
    
    // Cuando se hace clic en el botón, se llama a la función contarSegundos
    contarSegundos();
});


var oneclikButton2 = document.getElementById("oneclik2");
oneclikButton2.addEventListener("click",function(){

    clearInterval(intervalo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("second").textContent = "00";


})


function contarSegundos() {
    let segundos = 0;

    intervalo = setInterval(function() {
        // Incrementamos los segundos
        segundos++;

        // Rellenamos los segundos con ceros a la izquierda
        var segundosFormateados = zfill(segundos, 2);

        // Actualizamos el elemento HTML con los segundos formateados
        var secondsElement = document.getElementById("second");
        secondsElement.textContent = segundosFormateados;

        // Si los segundos alcanzan 60, reiniciamos los segundos y actualizamos los minutos
        if (segundos == 60) {
            
            segundos = 0;
            minutos++;
            minutos = zfill(minutos, 2); // Rellenamos los minutos con ceros a la izquierda

            // Actualizamos el elemento HTML con los minutos formateados
            var minutesElement = document.getElementById("minutes");
            minutesElement.textContent = minutos;




            // Si los minutos alcanzan 60, reiniciamos los minutos y actualizamos las horas
            if (minutos > 60) {
                horas++;
                horas = zfill(horas, 2); // Rellenamos las horas con ceros a la izquierda

                // Actualizamos el elemento HTML con las horas formateadas
                var hoursElement = document.getElementById("hours");
                hoursElement.textContent = horas;
            }
        }
        
        // Detenemos el contador después de un minuto completo (60 segundos)
        if (segundos == 60) {
            clearInterval(intervalo);
        }
    }, 1000); // Ejecutar cada segundo (1000 milisegundos)
}
