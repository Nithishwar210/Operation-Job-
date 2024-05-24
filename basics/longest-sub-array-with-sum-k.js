// Positve case
// REDO
// function lenOfLongSubarr(arr,n, k){

//     let start = 0;
//     let end = 0;
//     let maxLen = 0;
//     let currentTotal = 0;

//     while( start < n && end < n  ) {
//         console.log({currentTotal,start,end,maxLen});

//         if(currentTotal < k) {

//             currentTotal += arr[end];
//             end++
            
//         }else if(currentTotal === k) {

//             if(currentTotal === k ) {
//                 maxLen = Math.max(maxLen,end - start);
//             }
//             currentTotal = 0;
//             start++
//             end = start

//         }

//     }
//     return maxLen

// }

// Positve case
function lenOfLongSubarr(arr,n,k) {

    let left = 0; 
    let right = 0;
    let sum = arr[0];
    let max = 0;

    while(right < n) {

        while(left <= right && sum > k) {
            sum -= arr[left]
            left++
        }

        if(sum == k) {
            max = Math.max(max,right - left  + 1)
        }

        right++;
        if(right < n) {
            sum += arr[right]
        }

    }
    return max

}

let nums =  [-13, 0 ,6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6];
let n = nums.length;
let k = 15;

console.log('lenOfLongSubarr',lenOfLongSubarr(nums,n,k))

const lenOfLongSubarrNegative = (arr,n,k) => {
    let maxLength = 0
    let sum = 0;
    let sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;

        if(sum === k) {
            maxLength = i + 1;
        }

        if(sumMap.has(sum - k)) {
            maxLength = Math.max(maxLength,i - sumMap.get(sum - k))
        }

        if(!sumMap.has(sum - k)){
            sumMap.set(sum,i)
        }
        
    }
    return maxLength
}

 nums =  [-13, 0 ,6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6];
 n = nums.length;
 k = 15;

console.log('lenOfLongSubarrNegative',lenOfLongSubarrNegative(nums,n,k))
