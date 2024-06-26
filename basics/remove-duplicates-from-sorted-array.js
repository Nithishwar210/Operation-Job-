/* 
e 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 
*/

const removeDuplicates = (nums) => {
    let i = 0;
    let j = 1;

    while (j <= nums.length) {
        if (nums[j] != nums[i]) nums[++i] = nums[j];
        j++;
    };

    nums.length = i;

    return nums

};

// console.log('removeDuplicates', removeDuplicates([1,1, 2]));

const test = (arr,n) => {
    
    const reverse = (start,end) => {
        while(start < end) {
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++
            end--
            console.log('inside arr',start,end,arr);
        }
    }

    reverse(0,arr.length - 1 )
    reverse(0, n - 1)
    reverse(n , arr.length - 1);

    return arr
} 

console.log(test([1,2,3,4,5,6,7],3))
// console.log(test([-1,-100,3,99],2))