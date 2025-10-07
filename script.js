function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteChar() {
    var value = document.getElementById('result').value;
    document.getElementById('result').value = value.substr(0, value.length - 1);
}

function calculate() {
    var value = document.getElementById('result').value;
    var result = eval(value);
    document.getElementById('result').value = result;
}
