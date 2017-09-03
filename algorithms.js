//Write an algorithm to add two numbers entered by user
function userInputs (a, b) {
    return a + b;
}
userInputs (5, 4);

//Write an algorithm to find the factorial of a number entered by user.
function userFactorial(input) {
    if (input === 0) {
        return 1;
    }
    input = userFactorial(input - 1);
}
userFactorial(10);