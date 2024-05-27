/**
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/
const majorityElement = (nums) => {

    let current = nums[0];

    if (nums.length === 1) return current

    let count = 1;

    for (let i = 1; i < nums.length; i++) {

        const element = nums[i];

        if (element === current) {
            count++
        } else {
            count--
        };

        if (count === 0) {
            current = element
            count = 1
        }

    }
    return { count, current }
}
// const nums = [2, 2, 1, 1, 1, 2, 2]

// console.log('majorityElement', majorityElement(nums));

const prices = [7,6,4,3,1]
var maxProfit = function(prices) {
    let buyPrice = prices[0]
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        const element = prices[i];

        if(element < buyPrice) {
            buyPrice = element;
            continue;
        }

        maxProfit = Math.max(maxProfit, element - buyPrice )
        
    }
return maxProfit
};

// console.log('maxProfit', maxProfit(prices));

const nums = [3,1,-2,-5,2,-4]
var rearrangeArray = function(nums) {
    let postive = -2;
    let negative = -2;
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element < 0) {
            negative += 2;
            // ans[negative] = 
        }
    }

};

console.log('rearrangeArray', rearrangeArray(prices));
