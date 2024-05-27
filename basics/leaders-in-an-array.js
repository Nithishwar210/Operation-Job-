function leaders(arr, n) {
    // code here
    let curMax = arr[n - 1]
    let max = [ curMax ];

    for (let i = n - 2; i >= 0; i--) {
        const element = arr[i];
        if(element >= curMax) {
            max.unshift(element);
            curMax = element;
        };
    }

    return max

}

const n = 6, A = [63, 70, 80, 33, 33, 47, 20]

console.log("leaders",leaders(A,n));