document.querySelector('#btn').addEventListener('click', () => {
    let num1 = document.querySelector('#num01').value;
    let num2 = document.querySelector('#num02').value;
    let opr = document.querySelector('#opr').value;

    let result = 0;
    
    if(opr == '+'){
        result = Number(num1) + Number(num2);
    }else{
        result = Number(num1) - Number(num2);
    }

    let str = num1 + ' ' + opr + ' ' + num2 + ' = ' + result; 

    document.querySelector('.result').innerText = str;
});