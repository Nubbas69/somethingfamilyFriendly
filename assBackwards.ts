for (let i = 0; i <= 100; i++) {
    let d3 = i/3;
    let d5 = i/5;

    let fizzBuzz ='';

    if (i !== 0) {
        if (typeof d3.toString().split(".")[1] !== "string") fizzBuzz = fizzBuzz + "Fizz";
        if (typeof d5.toString().split(".")[1] !== "string") fizzBuzz = fizzBuzz + "Buzz";
    }

    console.log(fizzBuzz !== '' ? fizzBuzz : i);
}

// let num = 1.23467238947982

// let string = num.toString() // "1.23467238947982"

// string.split(".") // ["1", "23467238947982"]