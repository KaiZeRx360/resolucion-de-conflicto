// Definición del arreglo vacio para almacenar los contactos
let agenda = [];
// Contador para enumerar los contactos en forma de lista
let contadorContactos = 1;

// Función para agregar un contacto a la agenda
const agregarContacto = () => {
    // Obtener los valores de los campos del index.html
    const nombre = document.getElementById("nombre").value;
    const apellidoP = document.getElementById("apellidoP").value;
    const apellidoM = document.getElementById("apellidoM").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;

    // Verificar que todos los campos estén completos
    if (nombre && apellidoP && apellidoM && telefono && email) {
        // Crear un objeto con la información del contacto
        const contacto = {
            nombre: nombre,
            apellidoP: apellidoP,
            apellidoM: apellidoM,
            telefono: telefono,
            email: email
        };

        // Agregar el contacto al arreglo a la agenda
        agenda.push(contacto);

        // Obtener el elemento HTML de la lista de contactos
        const listaContactos = document.getElementById("listaContactos");
        // Limpiar el contenido anterior de la lista de contactos
        listaContactos.innerHTML = "";

        // Crear un elemento <ol> para una lista ordenada
        const listaOrdenada = document.createElement("ol");

        // Iterar sobre cada contacto en la agenda
        agenda.forEach(contacto => {
            // Crear un elemento <li> para cada contacto
            const item = document.createElement("li");
            // Agregar información del contacto al elemento <li>
            item.textContent = `${contadorContactos}. ${contacto.nombre} ${contacto.apellidoP} ${contacto.apellidoM} - ${contacto.telefono} - ${contacto.email}`;
            // Agregar el elemento <li> a la lista ordenada
            listaOrdenada.appendChild(item);
            // Incrementar el contador de contactos
            contadorContactos++;
        });

        // Agregar la lista ordenada a la lista de contactos en la interfaz de usuario
        listaContactos.appendChild(listaOrdenada);

        // Reiniciar el contador de contactos
        contadorContactos = 1;

        // Limpiar los campos de entrada después de agregar el contacto
        document.getElementById("nombre").value = "";
        document.getElementById("apellidoP").value = "";
        document.getElementById("apellidoM").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("email").value = "";

        // Mostrar un mensaje de éxito
        mostrarMensaje("¡Contacto agregado!", "success");
    } else {
        // Mostrar un mensaje de error si no se completan todos los campos
        mostrarMensaje("Por favor completa todos los campos.", "error");
    }
};

// Función para mostrar un mensaje usando SweetAlert2
const mostrarMensaje = (mensaje, tipo) => {
    Swal.fire({
        text: mensaje,
        icon: tipo,
        showConfirmButton: false,
        timer: 1500
    });
};

//esta linea esta en la rama main