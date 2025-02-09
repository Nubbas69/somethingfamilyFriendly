for (let i = 0; i <=100; i++) {
    let fizzBuzz = '';
    if (i % 3 == 0 && i !== 0) fizzBuzz += "Fizz";
    if (i % 5 == 0 && i !== 0) fizzBuzz += "Buzz";
    
    if (fizzBuzz == '') console.log(i);
    else console.log(fizzBuzz);
}