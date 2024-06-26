var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = Math.floor((left + right) / 2)

        if(nums[mid] === target) return true;
        console.log({left,right,mid:nums[mid]});
        if(nums[left] == nums[mid] && nums[right] === nums[mid]) {
            left = left + 1;
            right = right - 1;
            continue
        };

        if(nums[left] <= nums[mid]) {

            if(nums[left] <= target && target <= nums[mid]) {
                right = mid - 1
            }else {
                left = mid + 1;
            }

        } else {
            console.log('inside else');
            if(nums[mid] <= target && target <= nums[right]) {
                left = mid + 1
            }else {
                right = mid - 1;
            }

        }

    }

    return false

};

const nums =[3,1]
, target =1

console.log(search(nums,target))

