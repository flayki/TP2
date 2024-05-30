const form = document.getElementById("myForm");
const resultado = document.getElementById("resultado");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = form.nombre.value.trim();
    const apellidos = form.apellidos.value.trim();
    const edad = parseInt(form.edad.value);
    const altura = parseInt(form.altura.value);
    const email = form.email.value.trim();

    if (nombre === "" || apellidos === "") {
        resultado.textContent = "Nombre y apellidos son obligatorios.";
        resultado.style.color = "red";
    } else if (edad < 0 || edad < 18) {
        resultado.textContent = "La edad no es válida.";
        resultado.style.color = "red";
    } else if (altura < 0 || altura > 230) {
        resultado.textContent = "La altura no es válida.";
        resultado.style.color = "red";
    } else if (!email.includes("@")) {
        resultado.textContent = "El correo electrónico no es válido.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "¡Formulario válido!";
        resultado.style.color = "green";
    }
});