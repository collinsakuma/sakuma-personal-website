let primeNumberArray = [];
const input1 = document.getElementById("var1");
const button1 = document.getElementById("btn1");
const output1 = document.getElementById("output1");


const findPrimeNumber = (number) => {
    let stopper = false;
    if (number === 1) {
        return `${number} is neither prine nor composite`;
    }

    else if (number > 1) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                stopper = true;   /* switches condition if paramaters are met. */
                break;  /* stops code from continuously running when condition met */ 
            }
        }
        if (stopper === true) {
            return false;
        } else {
            return true; /* condition to be added to the array */
        }
    } else { 
        return false;
    }
}

const primesToArray = (desiredLength) => {
    let i = 2;
    while(desiredLength> primeNumberArray.length) {
        if(findPrimeNumber(i) === true) {
            primeNumberArray.push(i);
        }
        i++;
    }
}

const functionOne = () => {
    primeNumberArray = [];
    primesToArray(input1.value);
    output1.innerHTML = primeNumberArray;
}

button1.addEventListener('click', functionOne);