var findMin = function(nums) {
  
    let left = 0;
    let right = nums.length - 1;
    let min = Number.MAX_SAFE_INTEGER;

    while( left <= right ) {

        let mid = Math.floor((left + right) / 2);

        if(nums[left] <= nums[right]) {
            min = Math.min(min,nums[left]);
            break;
        }

        if(nums[left] <= nums[mid]) {
            min = Math.min(min,nums[left])
            left = mid + 1;
        } else {
            min = Math.min(min,nums[mid])
            right = mid - 1;
        }

    }


    return min
};


const nums = [3,4,5,0,1,2]

console.log(findMin(nums))
