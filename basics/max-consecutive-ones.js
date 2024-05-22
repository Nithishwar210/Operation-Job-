/** 
Example 1:

Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 2
 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let maxI = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {

        if (nums[end] !== 1) {
            start = end
        }

        maxI = Math.max(maxI, end - (start))
        console.log({start,end,maxI});
    }
    return maxI
};

const nums = [1,1,0,1,1,1]


console.log(findMaxConsecutiveOnes(nums))