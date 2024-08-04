
function calculateFactorial(n)
{
    let result=1;
    for (let i = 2; i <= n; i++) 
    {
        result *= i;
    }
    return result;
}


function factorialcal()
{
    const number = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    if (number === '') {
        resultElement.textContent = 'Please enter a number.';
        return;
    }
    
    const num = number
    if(num>0)
    {
    resultElement.textContent=`Factorial of ${num} is ${calculateFactorial(num)}`;
    }
    else
    {
    resultElement.textContent = `invalid input`;
    }
}