// PRIMER EJERCICIO DOM

function saludar() {

    let nombre = document.getElementById("nombre").value;

    alert(`Hola ${nombre}`);

    document.getElementById("resultado").value = `Hola, ${nombre}`;

}

// SEGUNDO EJERCICIO DOM

function registrar() {

    let nombre = document.getElementById("nombre2").value;
    let programa = document.getElementById("programa2").value;

    alert(`Aprendiz: ${nombre}\nPrograma: ${programa}`);

    document.getElementById("resultado11").value =
        `${nombre} - ${programa}`;

    document.getElementById("resultado22").innerText =
        `El aprendiz ${nombre} está inscrito en ${programa}.`;

    document.getElementById("resultado33").innerHTML =
        `<p style="color: #2415c7;">
            <strong>Aprendiz:</strong> ${nombre}<br>
            <strong>Programa:</strong> ${programa}
        </p>`;

    document.getElementById("resultado44").textContent =
        `El aprendiz ${nombre} está inscrito en ${programa}.`;

}

// TERCER EJERCICIO DOM: OPERACIONES NUMÉRICAS


function calcularOperaciones() {

    let n1 = parseFloat(document.getElementById("valorUno").value);
    let n2 = parseFloat(document.getElementById("valorDos").value);

    if (isNaN(n1) || isNaN(n2)) {
        alert("Por favor, ingresa dos números válidos.");
        return;
    }

    document.getElementById("Resultado_suma").innerText =
        `Resultado suma: ${n1 + n2}`;

    document.getElementById("Resultado_resta").innerText =
        `Resultado resta: ${n1 - n2}`;

    document.getElementById("Resultado_multiplicacion").innerText =
        `Resultado multiplicación: ${n1 * n2}`;

    if (n2 === 0) {
        document.getElementById("Resultado_divicion").innerText =
            "Resultado división: No se puede dividir entre cero.";
    } else {
        document.getElementById("Resultado_divicion").innerText =
            `Resultado división: ${n1 / n2}`;
    }
}