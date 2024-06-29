var minEatingSpeed = function(piles, h) {
    
    let left = 0;
    let right = Math.max(...piles);

    function canEatAll(piles,preHour,totalHour) {

        let total = 0;

        for (let i = 0; i < piles.length; i++) {
            const pile = piles[i];
            total += Math.ceil(pile/preHour);
        }

        return total <= totalHour;

    }

    while( left < right ) {

        let mid = Math.floor( (left + right) / 2 )
 
        if(canEatAll(piles,mid,h)) {
            right = mid
        }else {
            left = mid + 1
        }

    };

    return left

};
let piles = [3,6,7,11], h = 8;

console.log('minEatingSpeed',minEatingSpeed(piles,h))
