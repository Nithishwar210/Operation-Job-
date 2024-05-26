/* 
Example 1:

Input: nums = [1,2,1,3]

Output: 1

Explanation:

The only number that appears twice in nums is 1.

Example 2:

Input: nums = [1,2,3]

Output: 0

Explanation:

No number appears twice in nums.

Example 3:

Input: nums = [1,2,2,1]

Output: 3

Explanation:

Numbers 1 and 2 appeared twice. 1 XOR 2 == 3.
*/
var duplicateNumbersXOR = function (nums) {


    const hashMap = {};
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        hashMap[element] = (hashMap[element] || 0) + 1
        if (hashMap[element] === 2) {
            result ^= element
        }
    }

    return result;

};
const nums = [1,2,3]
console.log('duplicateNumbersXOR', duplicateNumbersXOR(nums));