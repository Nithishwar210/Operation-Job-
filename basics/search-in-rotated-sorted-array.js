var search = function(nums, target) {
  
    function binarySearch (nums,target,left,right) {
        console.log({left,right});
        if(left > right) return -1;
        let mid = Math.floor( (left+ right) / 2)

        console.log(mid,nums[mid]);

        if(nums[mid] === target) return mid;

        if( nums[mid] >= nums[left]) {
            if(nums[left] <= target && target <= nums[mid]) {
                return binarySearch(nums,target,left,mid - 1)
            }else {
                return binarySearch(nums,target,mid + 1,right)
            }

        } else {
            if(nums[mid] <= target && target <= nums[right]) {
                return binarySearch(nums,target,mid + 1,right)
            } else {
                console.log('inside last');
                return binarySearch(nums,target,left,mid - 1)
            }
        }

    }

    const result = binarySearch(nums,target,0,nums.length - 1)
    return result
};
const nums = [2,5,6,0,0,1,2], target = 0

console.log(search(nums,target))