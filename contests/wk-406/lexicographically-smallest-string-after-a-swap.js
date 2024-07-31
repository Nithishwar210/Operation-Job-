var getSmallestString = function (s) {

    s = s.split("")


    for (let i = 0; i < s.length - 1; i++) {
        const element = s[i];
        const next = s[i + 1]
        const total = +element + +next;
        
        if (element > next && (total % 2 === 0)) {
            console.log({s,element,next});
            let temp = s[i]
            s[i] = s[i + 1]
            s[i + 1] = temp

            console.log({s});
            return s.join("")
        }

    }

    return s.join("")

};

const s = "45320";

console.log({ getSmallestString: getSmallestString(s) });