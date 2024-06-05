var majorityElement = function(nums) {

    const hashMap = new Map();
    const pushSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        hashMap.set(element,(hashMap.get(element) || 0) + 1);

        if(hashMap.get(element) > nums.length / 3 ) {
            pushSet.add(element)
        } 

    };


    return [...pushSet]

};

const nums = [1];

console.log('majorityElement',majorityElement(nums));