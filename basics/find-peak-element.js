// var findPeakElement = function (nums) {

//     let max = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < nums.length; i++) {
//         const element = nums[i];

//         let prev = i - 1 < 0 ? 0 : nums[i - 1];
//         let next = i + 1 === nums.length ? 0 : nums[i + 1];

//         if (element > prev && element > next) {
//             max = Math.max(max, i)
//         }
//     };

//     return max;

// };


var findPeakElement = function (nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2)
        const element = nums[mid];

        let prev = mid - 1 < 0 ? Number.MIN_SAFE_INTEGER : nums[mid - 1];
        let next = mid + 1 === nums.length ? Number.MIN_SAFE_INTEGER : nums[mid + 1];

        if (element > prev && element > next) {
            return mid
        };

        if (next > element) {
            left = mid + 1
        } else {
            right = mid - 1
        }

    };

    return null

};

const nums = [1, 2, 1, 3, 5, 6, 4]



console.log('findPeakElement', findPeakElement(nums));