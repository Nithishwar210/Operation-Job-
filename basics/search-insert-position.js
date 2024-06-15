var searchInsert = function(nums, target) {
    
    let left = 0;
    let right = nums.length - 1;
    let insertIndex = 0;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(nums[mid] == target) {
            return mid
        }else if(nums[mid] < target) {
            insertIndex = mid;
            left = mid + 1;
        }else {
            right = mid - 1
        }

        console.log(left);

    }

    return left

};

const  nums = [1,3,5,6], target = 5

console.log(searchInsert(nums,target))