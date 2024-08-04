function checkpalindrone() {
    const string = document.getElementById('Input').value;
    const resultElement = document.getElementById('result');
    
    if (string === '') {
        resultElement.textContent = 'Please enter a string.';
        return;
    }
    
    const str = string;
    const reversedInput = str.split('').reverse().join('');
    if (str===reversedInput) {
        resultElement.textContent = `is palindrone`;
    } 
    else {
        resultElement.textContent = `is not a palindrone`;
    }
}
