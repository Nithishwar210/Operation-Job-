var numberOfPairs = function (nums1, nums2, k) {

    let i = 0;
    let j = 0;
    let count = 0;

    while (j < nums2.length) {

        const num = nums2[j] * k;

        while (i < nums1.length) {
            const numBase = nums1[i];
            if (numBase % num === 0) {
                count++
            }
            i++
        }
        i = 0
        j++
    }
    return count
};

const nums1 = [1, 2, 4, 12], nums2 = [2, 4], k = 3

console.log("numberOfPairs", numberOfPairs(nums1, nums2, k));