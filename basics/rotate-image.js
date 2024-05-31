// REDO
var rotate = function(matrix) {
    
    const n = matrix.length;
    const depth = ~~(n / 2)

    for (let i = 0; i < depth; i++) {
        let len = n - 2 * i - 1, opp = n - 1 - i
        for (let j = 0; j < len; j++) {
            // set last row first element as temp
            // Temp = bottom left
            // const temp = matrix[n - 1 - j][i];

            // // bottom left = bottom right
            // matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];

            // // bottom right = top right
            // matrix[n - 1 - i][n - j - 1] =  matrix[j][n - 1 - i];

            // // top right = top left
            // matrix[j][n - 1 - i] =  matrix[i][j];

            // // top left = temp
            // matrix[i][j] = temp;
            let temp = matrix[i][i+j]
            console.log({i,j,opp,temp});

            matrix[i][i+j] = matrix[opp-j][i]
            console.log('next 2:', matrix[opp - j],matrix[opp - j][i]);

            matrix[opp-j][i] = matrix[opp][opp-j]
            console.log('next 3:', matrix[opp],matrix[opp][opp-j]);

            matrix[opp][opp-j] = matrix[i+j][opp]
            console.log('next 4:', matrix[i+j],matrix[i+j][opp]);
            matrix[i+j][opp] = temp
            console.log('next 5:', matrix[i+j],matrix[i+j][opp]);
        }
        
    }
    return matrix
};

const matrix = [
            [5,1,9,11],
            [2,4,8,10],
            [13,3,6,7],
            [15,14,12,16]
        ]
console.log("rotate",rotate(matrix));