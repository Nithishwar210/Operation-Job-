var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let insertIndex = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] < target) {
            insertIndex = mid;
            left = mid + 1;
        } else {
            right = mid - 1
        }

        console.log(left);

    }

    return [left, right]
};

const nums = [5, 7, 7, 8, 8, 10], target = 8

console.log('searchRange', searchRange(nums, target))