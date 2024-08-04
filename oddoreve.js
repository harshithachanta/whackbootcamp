
function checkOddEven() {
    const number = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    if (number === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }
    
    const num = number;
    if (num % 2 === 0) {
        resultElement.textContent = `is even.`;
    } 
    else {
        resultElement.textContent = `is odd.`;
    }
}
