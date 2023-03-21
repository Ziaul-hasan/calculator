const inputField = document.getElementById('display');

document.getElementById('calculator').addEventListener('click', function(e){
    const numberBtn = e.target.innerText;
    if(numberBtn === '='){
        inputField.value = eval(inputField.value);
    }
    else if(numberBtn === 'AC'){
        inputField.value = '';
    }
    else if(numberBtn === 'CE'){
        const digit = (inputField.value).split('');
        digit.pop();
        inputField.value = digit.join('');
    }
    else if (numberBtn === 'x₂'){
        inputField.value = Math.pow(inputField.value, 2);
    }
    else if (numberBtn === 'x₃'){
        inputField.value = Math.pow(inputField.value, 3);
    }
    else if (numberBtn === '√x'){
        inputField.value = Math.sqrt(inputField.value);
    }
    else if (numberBtn == 'log()'){
        inputField.value = Math.log10(inputField.value);
    }
    else if (numberBtn === '%'){
        inputField.value = parseFloat(inputField.value)/100;
    }
    else if (numberBtn == 'tan()'){
        inputField.value = Math.tan(inputField.value*Math.PI/180);
    }
    else if (numberBtn == 'sin()'){
        inputField.value = Math.sin(inputField.value*Math.PI/180);
    }
    else if (numberBtn == 'cos()'){
        inputField.value = Math.cos(inputField.value*Math.PI/180);
    }
    else if (numberBtn == 'ℿ'){
        inputField.value += 3.1415926535;
    }
    else if(numberBtn == 'x!'){
        let i;
        let f = 1;
        let num = inputField.value;
        for(i = 1; i <= num; i++){
            f = f*i;
        }
        i = i -1;
        inputField.value = f;
    }
    else{
        inputField.value += numberBtn;
    }
    
})