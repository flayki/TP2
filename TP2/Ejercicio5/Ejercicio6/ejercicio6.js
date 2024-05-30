const calc = document.getElementById("calc");
const kg = document.getElementById("kg");
const m = document.getElementById("m");
const imc = document.getElementById("imc");
const lectura = document.getElementById("lectura");

calc.onclick = function() {
    if (kg.value !== "" && m.value !== "") {
        const imcx = kg.value / (m.value * m.value);
        imc.innerHTML = imcx.toFixed(2);

        if (imcx < 18.5) {
            lectura.innerHTML = "Peso inferior al normal";
        } else if (imcx >= 18.5 && imcx <= 24.9) {
            lectura.innerHTML = "Peso normal";
        } else if (imcx >= 25 && imcx <= 29.9) {
            lectura.innerHTML = "Peso superior al normal";
        } else if (imcx > 30) {
            lectura.innerHTML = "Obesidad";
        }
    } else {
        alert("Debes ingresar peso y altura.");
    }
};