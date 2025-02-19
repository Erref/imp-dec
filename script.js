document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener valores de los inputs
    const pies = parseFloat(document.getElementById('pies').value);
    const pulgadas = parseFloat(document.getElementById('pulgadas').value);
    const dieciseisavos = parseFloat(document.getElementById('dieciseisavos').value);
    const discrepancia = parseFloat(document.getElementById('discrepancia').value);

    // Convertir a pulgadas
    const totalPulgadas = (pies * 12) + pulgadas + (dieciseisavos / 16);

    // Convertir a milímetros (multiplicando por 25.4)
    let milimetros = totalPulgadas * 25.4;

    // Aplicar la discrepancia
    milimetros += discrepancia;

    // Mostrar resultado
    const resultado = document.getElementById('conversionResult');
    resultado.textContent = `Resultado: ${milimetros.toFixed(2)} mm (con discrepancia de ${discrepancia.toFixed(2)} mm)`;
});
