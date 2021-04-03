
const findNiceStrings = () => {
    const input = inputToArray();
    evaluateStrings(input);
};

const inputToArray = () => {
    const input = document.querySelector('textarea');
    return input.value.split("\n");
};

const evaluateStrings = input => {
    let niceStrings = [];

    for (const string of input) {

        if (lookForVowels(string)) {
            if (lookForDoubleLetters(string)) {
                if (lookForNaughtyGroups(string)) {
                    niceStrings.push(string);
                }
            }
        }

        // const minThreeVowels = lookForVowels(string);
        // const doubleLetters = lookForDoubleLetters(string);
        // const naughtyGroups = lookForNaughtyGroups(string);
        //
        // if (minThreeVowels && doubleLetters && naughtyGroups) {
        //     niceStrings.push(string);
        // }
    }

    renderResult(niceStrings.length);
};

const lookForVowels = string => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (const i of string) {
        if (vowels.includes(i)) {
            count += 1;
        }
    }

    return count >= 3;
};

const lookForDoubleLetters = string => {
    let count = 0;

    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === string[i + 1]) count += 1;
    }

    return count > 0;
};

const lookForNaughtyGroups = string => {
    const naughtyGroups = ['ab', 'cd', 'pq', 'xy'];

    for (const e of naughtyGroups) {
        if (string.includes(e)) {
            return false;
        }
    }
    return true;
};

const renderResult = number => {
    const resultDIV = document.querySelector('.result');
    resultDIV.querySelector('span').innerText = number;
    resultDIV.style.visibility = 'visible';
};

document.querySelector('.button').addEventListener('click', findNiceStrings);