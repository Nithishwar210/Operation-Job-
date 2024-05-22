/**
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 
 */

var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;

    while(j < nums.length ) {
        const num = nums[j];
        console.log({num,nums});
        if(num !== 0) {
            nums[i] = nums[j]
            i++
        };

        j++
    }

    for (let index = i; index < nums.length; index++) {
        nums[index] = 0
    }

    return nums
};

const  nums = [0,1,0,3,12]
console.log(moveZeroes(nums))