// function floorSqrt(x) {

//     let ans = 0;

//     for (let i = 1; i < x; i++) {

//         const element = i * i;

//         if( element <= x ) {
//             ans = i
//         } else {
//             break
//         }
        
//     }

//     return ans
    
// };

function floorSqrt(x) {

    let left = 0;
    let right = x;

    while(left <= right) {
        let mid = Math.floor(( left + right ) / 2);
        let value = mid * mid;

        if(value <= x) {
            left = mid + 1
        }else {
            right = mid - 1
        }

    };

    return right
    
};

const num = 4

console.log('floorSqrt', floorSqrt(num));