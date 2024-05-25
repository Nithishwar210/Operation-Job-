/*
Example 1:

Input: nums = [1,3,1,7], queries = [1,3,2,4], x = 1

Output: [0,-1,2,-1]

Explanation:

For the 1st query, the first occurrence of 1 is at index 0.
For the 2nd query, there are only two occurrences of 1 in nums, so the answer is -1.
For the 3rd query, the second occurrence of 1 is at index 2.
For the 4th query, there are only two occurrences of 1 in nums, so the answer is -1.
Example 2:

Input: nums = [1,2,3], queries = [10], x = 5

Output: [-1]

Explanation:

For the 1st query, 5 doesn't exist in nums, so the answer is -1.

nums = [1,3,2,2,3,3,1,3,1]
queyr = [5,6,1,5,6,4,1,5]
x = 3


*/

var occurrencesOfElement = function(nums, queries, x) {

    let obj = {};
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(element === x) {
            count++;
            obj[count] = i;
        }
    };
    let occurrence = [];

    for (let i = 0; i < queries.length; i++) {
        const element = queries[i];
        if(obj[element] !== undefined) {
            occurrence[i] = obj[element]
        }else {
            occurrence[i] = -1
        }
    }

    return occurrence
};

const nums = [1,3,2,2,3,3,1,3,1],
queries = [5,6,1,5,6,4,1,5],
x = 3
console.log('occurrencesOfElement', occurrencesOfElement(nums, queries, x));