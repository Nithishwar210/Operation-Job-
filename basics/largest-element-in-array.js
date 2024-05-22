const largestElementInarray = (arr,n) => {

    if(n === 1) return arr;

    let max = Number.MIN_SAFE_INTEGER;
    let i = 0;

    while( i < n ) {
        const element = arr[i]
       if(element > max ) max = element;
        i++
    };
    return max;
}


console.log('largestElementInarray',largestElementInarray([1, 8, 7, 56, 40],5))