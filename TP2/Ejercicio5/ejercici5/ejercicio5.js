function calcularArea() {
            const longitud = parseFloat(document.getElementById('longitud').value);
            const ancho = parseFloat(document.getElementById('ancho').value);

            if (!isNaN(longitud) && !isNaN(ancho)) {
                const area = longitud * ancho;
                document.getElementById('resultado').textContent = `El área del terreno es ${area} metros cuadrados.`;
            } else {
                document.getElementById('resultado').textContent = 'Ingresa valores válidos para longitud y ancho.';
            }
        }