var compressedString = function(word) {
    let comp = '';
    let current = word[0];
    let count = 1;

    for (let i = 1; i <= word.length; i++) {

        const element = word[i];

        if(current === element) {
            count++;
            if(count === 9) {
                comp += `${count}${current}`
                count = 1
                current = word[i + 1]
                i++
            };
        }else {
            comp += `${count}${current}`
            current = element;
            count = 1;
        };

    }

    return comp
};

const word = "aaaaaaaaay"

console.log("compressedString", compressedString(word));