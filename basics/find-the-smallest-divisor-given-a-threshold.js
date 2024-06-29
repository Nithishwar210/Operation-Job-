var smallestDivisor = function(nums, threshold) {
    
    if(nums.length > threshold) return -1;

    let left = 1
    let right = Math.max(...nums)

    function isMinDivisor(nums,divisor,threshold) {
        let total = 0;

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            total += Math.ceil(element / divisor);
        }
        return total <= threshold
    }

    while( left <= right ) {

        let divisor = Math.floor(( left + right ) / 2);

        if(isMinDivisor(nums,divisor,threshold)) {
            right = divisor - 1;
        } else {
            left = divisor + 1;
        }

    }

    return left

};

const nums = [1,2,5,9], threshold = 6
console.log('smallestDivisor',smallestDivisor(nums,threshold));