// write a javascript program to locate the left insertion point for a specific value in a sorted order
// [ 1, 2, 4,5,6]
// 3

function findLeftPosition(array, target) {

    const max = array[array.length - 1]
    const min = array[0]

    if (target >= max) {
        return array.length - 1
    } else if (target <= min) {
        return 0
    } else {

        for (let index = 0; index < array.length; index++) {

            const current = array[index];
            const next = array[index + 1]

            if (target > current && target < next) {
                return index + 1
            }

        }
    }

    return null
}

const array = [1, 2, 4, 5, 6]
const target = 0;

console.log(findLeftPosition(array, target))