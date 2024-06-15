function findFloor(arr, n, x) {
    let left = 0;
    let right = n - 1;
    let floorIndex = -1;

    while (left <= right) {
        let mid = Math.floor(left + right) / 2;
        if(arr[mid] === x) {
            return mid
        }else if(arr[mid] < x) {
            floorIndex = mid
            left = mid + 1
        }else {
            right = mid - 1;
        }
    };

    return floorIndex

}

const n = 7, x = 9
arr = [1, 2, 8, 10, 11, 12, 19]
console.log(findFloor(arr, n, x))    
