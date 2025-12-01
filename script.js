/* function readCheckbox(){
    let value = false
    value = document.getElementById("red1_1").readCheckbox()

    alert(value)
}
 */
document.getElementById("bt_test").onclick = function(){
    let checkbox = document.getElementById("red1_1");
    let value = checkbox.checked;

    alert(value);
}