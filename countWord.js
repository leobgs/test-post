function countLetters(str) {
    str = str.toLowerCase();

    let letterCounts = {};

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[a-z]/.test(char)) {
            if (letterCounts[char]) {
                letterCounts[char]++;
            } else {
                letterCounts[char] = 1;
            }
        }
    }

    let letterCountStrings = [];

    for (let letter in letterCounts) {
        let count = letterCounts[letter];
        letterCountStrings.push(`${letter}=${count}`);
    }

    let output = letterCountStrings.join(', ');

    return output;
}

console.log(countLetters("We Always Mekar"));
console.log(countLetters("coding is fun"));