var minDays = function (bloomDay, m, k) {
    const n = bloomDay.length;
    const totalFlowers = m * k;

    if ((totalFlowers) > n) return -1;


    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    function canMakeBouquet(bloomDay, days, totalFlowers) {

        let bouquet = 0;
        let flowers = 0;

        for (let i = 0; i < bloomDay.length; i++) {
            const element = bloomDay[i];

            if (element <= days) {
                flowers++
                if (flowers === k) {
                    bouquet++
                    flowers = 0
                }

            } else {
                flowers = 0
            }
            if (bouquet >= m) return true
        }

        return false

    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (canMakeBouquet(bloomDay, mid, totalFlowers)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left

};

let bloomDay = [7, 7, 7, 7, 12, 7, 7], m = 2, k = 3

console.log('minDays', minDays(bloomDay, m, k))
