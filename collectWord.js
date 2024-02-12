function groupAndSortLetters(words) {
    const letterCounts = {};

    for (const word of words) {
        for (const letter of word) {
            const lowercaseLetter = letter.toLowerCase();
            if (letterCounts[lowercaseLetter]) {
                letterCounts[lowercaseLetter]++;
            } else {
                letterCounts[lowercaseLetter] = 1;
            }
        }
    }

    const sortedLetters = Object.keys(letterCounts).sort((a, b) => {
        const countDiff = letterCounts[b] - letterCounts[a];
        if (countDiff === 0) {
            return a.localeCompare(b);
        }
        return countDiff;
    });

    let result = '';
    for (const letter of sortedLetters) {
        result += letter.repeat(letterCounts[letter]);
    }

    return result;
}


const words1 = ["Abc", "bCd"];
console.log(groupAndSortLetters(words1));

const words2 = ["Oke", "One"];
console.log(groupAndSortLetters(words2));

const words3 = ["Pendanaan", "Terproteksi", "Untuk", "Dampak", "Berarti"];
console.log(groupAndSortLetters(words3)); 