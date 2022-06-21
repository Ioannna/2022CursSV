//Ex. 1
const modifyNumber = (number) => {
    if (number % 2 !== 0) {
        return number * 2
    } else {
        return number - 2
    }
}

console.log(modifyNumber(9))

//Ex2

const checkPrime = number => {
    for (let div = 2; div * div <= number; div++){
        if (number % div === 0) return false;
    }
    return true
}

const savePrimes = (array) => {
    let newArray = new Array()
    for(i = 0; i < array.length; i++) {
       if (checkPrime(array[i])) {
        newArray.push(array[i])
       }
    }
    return newArray
}

console.log(savePrimes([1,2,3,4,5,6,8,9]))

//Ex3

const saveStrings = function(array) {
    let newArray = new Array
    array.forEach(element => {
        if ( (typeof element) === 'string') {
            newArray.push(element)
        }
    });
    return newArray
}

console.log(saveStrings([1, "2", "salut", 3, 4, "true"]));

//Ex 4

const addDigits = function (number) {
    let sum = 0;
    for(i = 0; i < number.length; i++) {
        let n = Number(number[i])
        if (n % 2 === 0) {
            continue
        }
        sum += n
    }
    return sum
}

console.log(addDigits('1523'))

//Ex4

const month = 'December'

switch (month) {
    case "January":
        console.log("It's Winter")
        break
    case "February":
        console.log("It's still winter")
        break
    case "December":
        console.log("It's the first month of winter!")
        break
    case "March": 
        console.log("Now it's spring")
        break
    case "April":
    case "May":
        console.log("It's spring!")
    case "June":
    case "July":
    case "August":
        console.log("It's summer!!")
        break
    default:
        console.log("Not a valid month")
    
}


