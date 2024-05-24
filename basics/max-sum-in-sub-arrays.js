/* 
REDO
Input : arr[] = [4, 3, 1, 5, 6]
Output : 11
*/

// function pairWithMaxSum(arr) {

//     let totalSum = 0;
//     let maxSum = 0;

//     for (let i = 0; i < 2; i++) {
//         const element = arr[i];
//         totalSum += element
//     };

//     maxSum = totalSum;
//     for (let i = 2; i < arr.length; i++) {
//         const element = arr[i];
//         totalSum = (totalSum -  arr[ i -  2 ] ) + element;
//         console.log({totalSum});
//         maxSum = Math.max(maxSum,totalSum);
//     }

//     return maxSum
// }

function pairWithMaxSum(arr) {

    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        const sum = arr[i] + arr[i + 1];
        if(sum > maxSum){
            maxSum = sum
        }
    }

    return maxSum
}



console.log("pairWithMaxSum",pairWithMaxSum( [5, 4, 3, 1, 6]));