document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '/' || key === '*' || key === '-' || key === '+') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteLast();
    } else if (key.toLowerCase() === 'c') {
        clearDisplay();
    }
});

function clearDisplay() {
    document.calc.display.value = "";
}

function deleteLast() {
    document.calc.display.value = document.calc.display.value.slice(0, -1);
}

function appendToDisplay(value) {
    const display = document.calc.display.value;
    if (/[+\-*/%]$/.test(display) && /[+\-*/%]/.test(value)) {
        document.calc.display.value = display.slice(0, -1) + value;
    } else {
        document.calc.display.value += value;
    }
}

function calculateResult() {
    try {
        document.calc.display.value = eval(document.calc.display.value.replace(/x/g, '*'));
    } catch (e) {
        document.calc.display.value = "Error";
    }
}