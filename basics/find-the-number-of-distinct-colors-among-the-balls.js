
var queryResults = function(limit, queries) {
    
    let balls = {}
    let colors = new Set();
    let output = [];
    let count = 0;

    for (let i = 0; i < queries.length; i++) {

        const element = queries[i];
        const ball = element[0];
        const color = element[1];

        if(balls[ball] != undefined && !colors.has(color)) {
            count--;
        }

        if(!colors.has(color)) {
            count++;
        };

        console.log('outside',{color,colors,count});

        balls[ball] = color;
        colors.add(color);
        output.push(count);
        // console.log({balls,colors});
        
    };

    return output

};

const limit = 4,queries = [[0,1],[1,4],[1,1],[1,4],[1,1]]

console.log('queryResults', queryResults(limit, queries));