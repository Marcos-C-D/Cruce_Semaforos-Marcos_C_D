// Función que lee el estado de checkboxes en el DOM
function readTL(num, TL) {
    var estados = [];
    for (let i = 1; i <= num; i++) {
        const checkbox = document.getElementById(TL + "_" + i);
        estados.push(`${i}: ${checkbox.checked ? 'Marcado' : 'No marcado'}`);
    }
    
    alert(estados)
    return [estados];
}

// Función que recopila todos los estados y los envía al servidor
function readAllTF(num) {
    var results = [];
    const TFs = ["red1", "ambar1", "green1", "red2", "ambar2", "green2"];
    for (let j = 0; j < TFs.length; j++) {
        const estados = readTL(num, TFs[j]);
        results.push(`Resultados para ${TFs[j]}:\n${estados.join('\n')}`);
    }

    alert(results)
    return [results]
}
