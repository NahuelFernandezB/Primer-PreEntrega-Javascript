while (true) {

    let usuario = prompt("Ingrese su usuario").toLowerCase();
    let pass = prompt("Ingrese su contraseña")

    if (usuario == "admin") {

        if (pass == "123") {

            alert("Bienvenido, ahora podes adivinar el numero")

            let max = 20
            let min = 1
            let intentos = 0
            let numero = Math.random() * (max - min) + min
            numero = parseInt(numero)

            while (true) {
                let usuario = prompt("Ingresa un numero hasta adivinar el correcto");
                intentos = intentos + 1

                if (usuario == numero) {
                    alert("Felicitaciones, ganaste en " + intentos + " intentos");
                    break;

                } else if (usuario == 0) {
                    break;

                } else if (usuario < numero) {

                    alert("El numero es menor al correcto, volve a intentar, si deseas salir, ingresa 0");

                } else if (usuario > numero) {

                    alert("El numero es mayor al correcto, volve a intentar, si deseas salir, ingresa 0");
                }

            }

        } else {

            alert("Se ingreso mal la contraseña")

        }
    } else {
        alert("Se ingreso mal el usuario")

    }

    if (confirm("Queres volver a jugar?")) {
        alert("Volves al principio")

    } else {
        alert("Chau")
        break;
    }

}
