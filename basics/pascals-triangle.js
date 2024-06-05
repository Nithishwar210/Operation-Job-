var generate = function(numRows) {

    if(numRows === 1) return [[1]]
    if(numRows === 2) return [[1],[1,1]]

    const triangles = [[1],[1,1]];

    for(let i = 2; i < numRows; i++) {
        triangles[i] = [];

        triangles[i][0] = 1;
        triangles[i][i] = 1;

        for(let j = 1; j < i; j++) {
            triangles[i][j] = triangles[i - 1][j - 1] + triangles[i - 1][j]
        }

    }
        return triangles

};