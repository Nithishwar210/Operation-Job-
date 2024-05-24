/*
REDO
Given an integer array nums, find the 
subarray
 with the largest sum, and return its sum.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
Example 2:

Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let globalMaxSum = Number.MIN_SAFE_INTEGER;
    let localMaxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        
        localMaxSum = localMaxSum + element;
        console.log({localMaxSum});
        if(localMaxSum > globalMaxSum) {
            globalMaxSum = localMaxSum
        };
        console.log({globalMaxSum});
        if(localMaxSum < 0) {
            localMaxSum = 0
        }
    }

    return globalMaxSum
};


console.log(maxSubArray([-2,-1]));







