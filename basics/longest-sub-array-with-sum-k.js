function lenOfLongSubarr(arr,n, k){

    let start = 0;
    let end = 0;
    let maxLen = 0;
    let currentTotal = 0;

    while( start < n && end < n  ) {
        console.log({currentTotal,start,end,maxLen});

        if(currentTotal < k) {

            currentTotal += arr[end];
            end++
            
        }else if(currentTotal === k) {

            if(currentTotal === k ) {
                maxLen = Math.max(maxLen,end - start);
            }
            currentTotal = 0;
            start++
            end = start

        }

    }
    return maxLen

}

const nums =  [-13, 0 ,6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6];
const n = nums.length;
const k = 15;

console.log(lenOfLongSubarr(nums,n,k))