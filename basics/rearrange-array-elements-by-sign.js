/* 
Example 1:

Input: nums = [3,1,-2,-5,2,-4]
Output: [3,-2,1,-5,2,-4]
Explanation:
The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].
The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].
Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  
Example 2:

Input: nums = [-1,1]
Output: [1,-1]
Explanation:
1 is the only positive integer and -1 the only negative integer in nums.
So nums is rearranged to [1,-1].
*/

var rearrangeArray = function(nums) {
    let curPos = -2
    let curNeg = -1;
    let ans = new Array(nums.length)
   for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
        if(element > 0) {
            ans[curPos + 2] = element
        }else {
            ans[curNeg + 2] = element
        }
        console.log({nums});
   }
   return ans
};

console.log('rearrangeArray',rearrangeArray( [3,1,-2,-5,2,-4]
))
// [28,-41,22,-8,-37,46,35,-9,18,-6,19,-26,-37,-10,-9,15,14,31]
// 