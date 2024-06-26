function findKRotation(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    let index = 0;
    let ans = Infinity;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);


        if (arr[left] <= arr[right]) {

            if (arr[left] < ans) {
                ans = arr[left];
                index = left
            }

            break;
        }


        if (arr[left] <= arr[mid]) {

            if (arr[left] < ans) {
                ans = arr[left];
                index = left
            }

            left = mid + 1;

        } else {


            if (arr[mid] < ans) {
                ans = arr[mid];
                index = mid
            }

            right = mid - 1;

        }

    };

    return index;
}

// const nums = [3,4,5,0,1,2]

// console.log(findKRotation(nums))


var minimumOperations = function (nums) {

    let totalOperations = 0;

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if ((element + 1) % 3 === 0) {
            totalOperations++
        } else if ((element - 1) % 3 === 0) {
            totalOperations++
        }

    }

    return totalOperations
};


const nums = [1, 2, 3, 4]
console.log(minimumOperations(nums))


// var minOperations = function (nums) {

//     let count = 0;
//     for (let i = 0; i < nums.length - 2; i++) {

//         if(nums[i] !== 0) continue

//         for (let j = i; j < i + 3; j++) {
//             const value = nums[j];
//             if (value === 0) { nums[j] = 1  } else {  nums[j] = 0  }
//         }
//         count++
//     }

//     return !nums.includes(0) ? count : -1


// };

var minOperations = function(nums) {
    let count = 0;

    for (let i = 0; i < nums.length ; i++) {
        if(nums[i] !== 0) continue
        for (let j = i; j < nums.length; j++) {
            nums[j] = nums[j] === 0 ? 1 : 0
        }
        count++
    }

    return count

};

var minOperations1 = function(nums) {
    let count = 0;
    let flipState = 0;  // Keeps track of the current flip state

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] ^ flipState) === 0) {
            flipState ^= 1;  // Toggle the flip state
            count++;
        }
    }

    return count;
};


// const nums1 = [1,0,0,1,0]
// console.log(minOperations1(nums1))

var minimumAverage = function(nums = []) {
    nums.sort((a,b) => a - b);
    let minAvg = Number.MAX_SAFE_INTEGER;

    while(nums.length > 0) {
        let low = nums.shift()
        let high = nums.pop()
        minAvg = Math.min(minAvg,( low + high ) / 2)
    };

    return minAvg

};


const nums1 = [7,8,3,4,15,13,4,1]
console.log(minimumAverage(nums1))


var minimumArea = function(grid) {
 let minRow = grid.length
 let maxRow = -1;
 let minCol = grid[0].length
 let maxCol = -1

    for (let i = 0; i < grid.length; i++) {
        const element = grid[i];

        for (let j = 0; j < element.length; j++) {
            const item = element[j];
            if(item === 1) {
                minRow = Math.min(i,minRow)
                maxRow = Math.max(i,maxRow)
                minCol = Math.min(j,minCol)
                maxCol = Math.max(j,maxCol)
            }
            
        }

    }

    if(maxRow === - 1 || maxCol === -1) {
        return 0
    }

    let width =( maxCol - minCol )+ 1;
    let height = ( maxRow - minRow ) + 1

    return width * height
};

const  grid = [[0,0],[1,0]]
console.log('minimumArea',minimumArea(grid))
