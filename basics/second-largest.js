const secondLargest = (arr,n) => {

    let max = arr[0];
    let secondMax = -1;
    let i = 0;

    while( i < arr.length  ) {

        const element = arr[i];
        
        if(element > max) { 
            secondMax = max
            max = element 
        }
        if(element < max && element > secondMax) secondMax = element;

        i++;
        
    }
    return secondMax
}

// console.log('secondLargest',secondLargest([22,100,21,20],2))

var check = function(nums) {
    
    for (let i = 0; i < nums.length; i++) {
        nums[i] = (nums[i + 3] % nums.length)
        console.log({nums});
    };

    return nums
};

// console.log({check:check([3,4,5,1,2])});


function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n;  // In case k is greater than n

    // Helper function to reverse a portion of the array
    function reverse(start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }

    // Reverse the whole array
    reverse(0, n - 1);
    console.log(k,arr);
    reverse(0, n - 1);
    console.log(arr);
    reverse(0, n - 1);
    console.log(arr);
    // // Reverse the first k elements
    // reverse(0, k - 1);
    // // Reverse the remaining elements
    // reverse(k, n - 1);
}

// Example usage:
let arr = [ 3, 4, 5,1,2];
rotateArray(arr, 2);
console.log('arr',arr);  // Output: [4, 5, 1, 2, 3]



