const maxLen = (arr) => {
    let sum = 0;
    let map = {};
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        sum += element;
        console.log('before max',max);
        if(sum === 0) {
            max = i + 1;
        };

        console.log(sum in map,sum,max,map[sum],i);
        if(map[sum] != undefined) {
            max = Math.max(max, i - map[sum])
        }else {
            map[sum] = i
        }

    }

    return max
}

console.log(maxLen([-1 ,1 ,-1 ,1]))