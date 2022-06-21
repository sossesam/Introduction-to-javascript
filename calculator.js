var firstNumber = parseInt(prompt("Enter your first number"));
var calculation = prompt("enter + for addition - for subtraction * for multiplication / for division");
var secondNumber = parseInt(prompt("enter second number"));
var result;


    if (calculation == "+"){
        result = firstNumber + secondNumber;
       
    }
    else if(calculation == "-"){
        result = firstNumber - secondNumber;
        
    }else if(calculation == "*"){
        result =firstNumber * secondNumber;
        
    }else if(calculation == "/"){
        result =firstNumber / secondNumber;
     
    }else{
        alert("check code, something is wrong")
    }

    alert("The " + calculation + " of "+ firstNumber+ " and " +secondNumber+ " is " + result)
