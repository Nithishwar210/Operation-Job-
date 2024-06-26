var singleNonDuplicate = function (nums = []) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        let prev = nums[mid - 1];
        let next = nums[mid + 1];
        if ((mid - 1 < 0 || prev !== nums[mid]) && (mid + 1 === nums.length || next !== nums[mid])) return nums[mid]

        let leftSize = prev === nums[mid] ? mid - 1 : mid
        if (leftSize % 2) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return null;

};

const nums = [3,3,7,7,10,11,11]
console.log('singleNonDuplicate', singleNonDuplicate(nums));