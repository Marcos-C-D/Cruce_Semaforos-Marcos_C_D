/* function read(){
    const seleccionados = Array.from(
    document.querySelectorAll('input[name="opcion"]:checked')
    ).map(chk => chk.value);

    const texto = seleccionados.join('\n');

    alert(texto)
}
 */


document.getElementById('guardar').addEventListener('click', () => {
  const seleccionados = Array.from(
    document.querySelectorAll('input[name="opcion"]:checked')
  ).map(chk => chk.value);

  const contenido = seleccionados.join('\n');

  const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'resultado.txt'; // nombre del archivo
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
