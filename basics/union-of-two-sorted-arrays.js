function findUnion(arr1, arr2, n, m)
{
    let i = 0;
    let j = 0;
    let unique = new Set();

    while(i < n && j < m) {

        if(arr1[i] < arr2[j]) {
            unique.add(arr1[i])
            i++
        }else {
            unique.add(arr2[j])
            j++
        }

    }

    while(i < n) {
        unique.add(arr1[i])
        i++
    }

    
    while(j < m) {
        unique.add(arr2[j])
        j++
    }

    return Array.from(unique)

}

const nums = [1, 2, 3, 4, 5]
const nums2 = [1, 2, 3, 6, 7]


console.log(findUnion(nums,nums2,5,5))