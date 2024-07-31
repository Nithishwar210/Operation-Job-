
var shipWithinDays = function(weights = [], days) {
    let left = Math.max(...weights)
    let right = weights.reduce((prev,cur) => prev + cur, 0 )

    function daysToHoldCapacity(capacity) {

        let total = 0;
        let days = 1;

        for (let i = 0; i < weights.length; i++) {
            const element = weights[i];
            total += element;
            if(total > capacity) {
                total = element;
                days++
            }
        }
        return days
    };

    while(left <= right) {

        let capacity = Math.floor((left + right) / 2);

        if(daysToHoldCapacity(capacity) > days ) {
            left = capacity + 1
        } else {
            right = capacity - 1
        }

    }
    return left
};
const  weights = [1,2,3,4,5,6,7,8,9,10], days = 5;

// console.log("shipWithinDays",shipWithinDays(weights,days));
