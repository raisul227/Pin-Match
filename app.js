function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin();
    }
}

function genaratePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

//set calc

document.getElementById('key-pad').addEventListener('click', function (event) {
    const num = event.target.innerText;
    const keyInput = document.getElementById('key-input');
    if (isNaN(num)) {
        if (num === "C") {
            keyInput.value = '';
        }
    } else {
        const previousNum = keyInput.value;
        const newNum = previousNum + num;
        keyInput.value = newNum;
    }

})

//match the code 
document.getElementById('submit').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    const key = document.getElementById('key-input').value;
    const succsess = document.getElementById('success-message');
    const fail = document.getElementById('fail-message');
    if (pin == key) {
        succsess.style.display = 'block';
        fail.style.display = 'none';
    } else {
        succsess.style.display = 'none';
        fail.style.display = 'block';
    }
})