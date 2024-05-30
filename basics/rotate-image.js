var rotate = function(matrix) {
    
    const n = matrix.length;

    for (let i = 0; i < Math.floor( n + 1 ) / 2; i++) {

        for (let j = 0; j < Math.ceil(n / 2); j++) {
            // set last row first element as temp
            // Temp = bottom left
            const temp = matrix[n - 1 - j][i];

            // bottom left = bottom right
            matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];

            // bottom right = top right
            matrix[n - 1 - i][n - j - 1] =  matrix[j][n - 1 - i];

            // top right = top left
            matrix[j][n - 1 - i] =  matrix[i][j];

            // top left = temp
            matrix[i][j] = temp;

        }
        
    }
    return matrix
};

const matrix =[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]

console.log("rotate",rotate(matrix));