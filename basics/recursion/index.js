
const sumArray = (arr = []) => {
    if(arr.length === 1) return arr[0]
    const current = arr.shift()
    return current + sumArray(arr)
};

const num  = [ 1,2,4,5,6,7,234,2,3 ]
console.log(sumArray(num))

const fib = (n) => {
    if(n == 0) return 0;

    if(n == 1 || n == 2) return 1;

    return fib(n - 1) + fib(n - 2)
}

console.log(fib(6))

const factorial = (n) => {
    if(n === 0) return 1;
    return n * factorial(n - 1)
}

console.log(factorial(5))
