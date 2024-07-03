var smallestDivisor = function (nums, threshold) {

    if (nums.length > threshold) return -1;

    let left = 1
    let right = Math.max(...nums)

    function isMinDivisor(nums, divisor, threshold) {
        let total = 0;

        for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            total += Math.ceil(element / divisor);
        }
        return total <= threshold
    }

    while (left <= right) {

        let divisor = Math.floor((left + right) / 2);

        if (isMinDivisor(nums, divisor, threshold)) {
            right = divisor - 1;
        } else {
            left = divisor + 1;
        }

    }

    return left

};

const nums = [1, 2, 5, 9], threshold = 6

const combinationOfAnagram = (str = '', ang) => {

    let result = [];
    let stringLength = ang.length;

    for (let index = 0; index <= str.length - stringLength; index++) {
        let string = str.substring(index, index + stringLength);
        if (isAnagram(string, ang)) {
            result.push(string)
        }
    }

    return result

};

const isAnagram = (str1, str2) => {
    const sorting = (str) => str.split('').sort().join();
    return sorting(str1) === sorting(str2)
};
// console.log(combinationOfAnagram("stopatthespotnearthepots", "tops"));
//stop spot pots


    const getDuplicated = (arr) => {

        const obj = {};

        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            obj[element] = (obj[element] || 0) + 1
        }

        const keys = Object.keys(obj);
        let result = [];

        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const value = obj[key]
            if(value > 1) {
                result.push(...Array(value).fill(key))
            }

        }
        return result
    }

const dupNums = [1, 1, 3, 3, 2, 4, 5, 5, 6]
// [1,1,3,3,5,5]

console.log({ getDuplicated: getDuplicated(dupNums) });