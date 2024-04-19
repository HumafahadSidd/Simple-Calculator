import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operator to perfrom operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Percentage", "Exponent", "Modulus"],
    },
]);
console.log(answer);
//conditional test
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log((answer.firstNumber / answer.secondNumber) * 100, "%");
}
else if (answer.operator === "Exponent") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "Modulus") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Please Select Valid Number");
}
