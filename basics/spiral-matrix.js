/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  
    let colStart = 0;
    let colEnd = matrix[0].length - 1;
    let rowStart = 0;
    let rowEnd = matrix.length - 1;
    let result = [];

    while(rowStart <= rowEnd && colStart <= colEnd) {

        for (let i = colStart; i <= colEnd; i++) {
            result.push(matrix[rowStart][i])
        };

        rowStart++

        for (let i = rowStart; i <= rowEnd; i++) {
            result.push(matrix[i][colEnd])

        };        
        colEnd--;

        if(rowStart <= rowEnd) {
            for (let i = colEnd; i >= colStart; i--) {
                result.push(matrix[rowEnd][i])
            };        
            rowEnd--;
            console.log({result3:result});
        }
        
        if(colStart <= colEnd) {
            for (let i = rowEnd; i >= rowStart; i--) {
                result.push(matrix[i][colStart])
            };         
            colStart++;
        }

    }
    return result
};
// [1,2,3,6,9,8,7,4,5]
const matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log("spiralOrder",spiralOrder(matrix));