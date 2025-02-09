/**
 * FizzBuzz
 * 
 * % is a modulo operator
 */

function fizzBuzLogic(i: number) {
    if (i == 0) return console.log(i);
    if (0 == (i % 3) && 0 != (i % 5)) console.log("Fizz");
    else if (0 == (i % 5) && 0 != (i % 3)) console.log("Buzz");
    else if (0 == (i % 5) && 0 == (i % 3)) console.log("FizzBuzz");
    else console.log(i);
}

(() => {
    for (let i = 0; i <= 100; i++) 
    {
       fizzBuzLogic(i);
    }
})()
