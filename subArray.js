// [-2,1,-3,4,-1,2,1,-1,4]
// [4,-1,2,1]


const maxSubArray = (arr=[]) => {

    let total = 0;
    let max = Number.MIN_SAFE_INTEGER;
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        const element = arr[i];

        total += element;

        if(total < 0) {
            total = 0
            result = []
            continue
        };

        if(max > 0) result.push(element)

        if(max < total) {
            max = total
        }

    }

return {max,result}

};

const nums =[-2,1,-3,4,-1,2,1,-5,4]


console.log(maxSubArray(nums))