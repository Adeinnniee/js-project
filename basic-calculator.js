console.log("This is a Calculaor that performs basic operations with 2 numbers.");
// creating variables and getting the input from the user.
let num1_in_string = prompt("Enter the first number:", "0");
let num2_in_string = prompt("Enter the second number:", "0");
let operator = prompt("Enter your specified operator:", "+, -, * or /");
let result;
let num1 = parseFloat(num1_in_string);
let num2 = parseFloat(num2_in_string);



// condition for any of the basic operations
switch(operator){
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Please enter a valid basic operator (either +, -, * or /)";
        break
}

// condition  to print the result
if (result == "Please enter a valid basic operator (either +, -, * or /)"){
    console.log(result);
} else{
    console.log(num1, result, num2, "= " + result);
}