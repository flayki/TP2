document.getElementById('areaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const forma = document.getElementById('forma').value;
    const A = parseFloat(document.getElementById('A').value);
    const B = parseFloat(document.getElementById('B').value);
    const C = parseFloat(document.getElementById('C').value);

    let area;

    if (forma === 'A') {
        if (A <= 0 || B <= 0 || C <= 0 || A <= C) {
            document.getElementById('result').textContent = "Por favor, ingrese valores válidos. A debe ser mayor que C.";
            return;
        }
        area = (B * C) + (0.5 * B * (A - C));
    } else if (forma === 'B') {
        if (A <= 0 || B <= 0 || C <= 0 || A <= C) {
            document.getElementById('result').textContent = "Por favor, ingrese valores válidos. A debe ser mayor que C.";
            return;
        }
        const height = A - C;
        const triangleArea = 0.5 * B * height;
        const rectangleArea = B * C;
        area = triangleArea + rectangleArea;
    }

    document.getElementById('result').textContent = `El área del terreno es: ${area.toFixed(2)} m²`;
});