/* 
Question
Given an unsorted array of integers nums, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example
Input: nums = [100, 4, 200, 1, 3, 2]

Output: 4

Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example
Input: nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]

Output: 9
*/

function longestConsecutive(nums) {
   
    const hashMap = new Map();

    for (const iterator of nums) {
        hashMap.set(iterator,false)
    }

    let longestLength = 0;

    for (let i = 0; i < nums.length; i++) {

        const num = nums[i];
        let currentLength = 1;
        let nextNum = num + 1;

        while(hashMap.has(nextNum) && hashMap.get(nextNum) === false) {
            hashMap.set(nextNum,true);
            currentLength++;
            nextNum++;
        };

        let prevNum = num - 1;

        while(hashMap.has(prevNum) && hashMap.get(prevNum) === false) {
            hashMap.set(prevNum,true);
            currentLength++;
            prevNum--;
        }

        longestLength = Math.max(longestLength,currentLength)

    }

    return longestLength

}

const nums = [100, 4, 200, 1, 3, 2]
console.log("longestConsecutive",longestConsecutive(nums));