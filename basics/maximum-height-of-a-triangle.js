var maxHeightOfTriangle = function(red, blue) {
    const total = red + blue;
    let first,second;

    if(total % 2 === 0) {
        first = Math.max(red,blue)
        second = Math.min(red,blue)
    } else {
        first = Math.min(red,blue)
        second = Math.max(red,blue)
    }
    console.log({first,second});

};

console.log(maxHeightOfTriangle(2,4))