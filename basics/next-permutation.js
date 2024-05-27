/* 

Find arr[i] < arr[ i + 1 ] index;
Find next value to the index value
Reverse the arr from next index value;

*/

var nextPermutation = function(nums) {
    
    let index;
    const n = nums.length;

    for (let i = n - 2; i >= 0; i--) {
        if(nums[i] < nums[i + 1]) {
            index = i;
            break;
        }
    };

    for (let i = n - 1; i > index; i--) {
        if(nums[i] > nums[index]) {
           [nums[i],nums[index]] = [nums[index],nums[i]]
           break
        }
    };

    function reverse(start,end) {
        
        while(start < end) {
            [nums[start],nums[end]] = [nums[end],nums[start]]
            start++;
            end--;
        }

    }
    if(index >= 0){
        reverse(index + 1, n - 1);
    }else {
        reverse(0,n - 1)
    }

    return nums
};

const nums =[1,3,2]
console.log("nextPermutation",nextPermutation(nums));