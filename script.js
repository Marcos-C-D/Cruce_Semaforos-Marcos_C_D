// Pins //
const red1 = 2
const ambar1 = 3
const green1 = 4
const red2 = 5
const ambar2 = 6
const green2 = 7
const pinsList = [red1, ambar1, green1, red2, ambar2, green2]



function read(id) {
    // Reads one checkbox
    const checked = document.getElementById(id).checked ? '1' : '0';
    return checked
}

function readTF(id) {
    // reads the three checkboxes of one trafic light
    const red = read("red" + id)
    const ambar = read("ambar" + id)
    const green = read("green" + id)

    return [red, ambar, green]
}

function transform(id) {
    const readings = readTF("1_" + id).concat(readTF("2_" + id))
    let onPins = []

    for (let i = 0; i < 6; i++) {
        if (readings[i] == "1"){
            onPins.push(pinsList[i])
        }
    }
    return onPins
}

function prepareToSend(lst){
    let result = []

    for (let i = 0; i < lst.lenght; i++){
        result.push(lst[i])
        result.push("-")
    }

    result.pop()
    return result.join()
}

function send(pins) {
    fetch('/checkbox', {method: 'POST', body: pins})
    .then(() => alert('Enviado: ' + color));
}

function test(){
    alert(prepareToSend(transform("1")))
}