function getFloorAndCeil(arr, n, x) {
   
    let floorIndex = -1;
    let ceilIndex = -1;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        
        if(element <= x) {
            floorIndex = i
        };

        if(element >= x  ) {

            if(ceilIndex === -1) {
                ceilIndex = i;
            }
        }

    }
   
    return {
        floorIndex:floorIndex >= 0 ? arr[floorIndex] : floorIndex,
        ceilIndex: ceilIndex >= 0 ? arr[ceilIndex] : ceilIndex
    }

}

const n = 8, x = 7
arr = [5, 6, 8, 9, 6, 5, 5, 6]
console.log(getFloorAndCeil(arr, n, x))    
