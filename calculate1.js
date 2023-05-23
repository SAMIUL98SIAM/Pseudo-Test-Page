function addition(n1,n2)
{
    return n1+n2 ;
}
function subtraction(n1,n2)
{
    return n1-n2 ;
}
function multiplication(n1,n2)
{
    return n1*n2 ;
}
function division(n1,n2)
{
    return n1/n2 ;
}

function power(n1,n2)
{
    return Math.pow(n1,n2) ;
}

var option = prompt("+ | - | * | / | X^N take these option:  ");
if(option=="+")
{
    console.log("Welcome to + Operation")
    var num1 = parseInt( prompt('Enter the first number: '));
    var num2 = parseInt( prompt('Enter the second number: '));

    console.log(num1+" "+option+" "+num2+" = "+(addition(num1,num2)));
}
else if(option=="-")
{
    console.log("Welcome to - Operation")
    var num1 = parseInt( prompt('Enter the first number: '));
    var num2 = parseInt( prompt('Enter the second number: '));

    console.log(num1+" "+option+" "+num2+" = "+(subtraction(num1,num2)));
}
else if(option=="-")
{
    console.log("Welcome to * Operation")
    var num1 = parseInt( prompt('Enter the first number: '));
    var num2 = parseInt( prompt('Enter the second number: '));

    console.log(num1+" "+option+" "+num2+" = "+(multiplication(num1,num2)));
}
else if(option=="/")
{
    console.log("Welcome to / Operation")
    var num1 = parseInt( prompt('Enter the first number: '));
    var num2 = parseInt( prompt('Enter the second number: '));

    console.log(num1+" "+option+" "+num2+" = "+(division(num1,num2)));
}
else if(option=="X^N")
{
    console.log("Welcome to X^N Operation")
    var num1 = parseInt( prompt('Enter the first number: '));
    var num2 = parseInt( prompt('Enter the second number: '));

    console.log(num1+" to the power "+num2+" = "+(power(num1,num2)));
}
else 
{
    console.log("Exit!!!!")
}


