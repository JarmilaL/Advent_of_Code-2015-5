
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

    if (document.getElementById('radio-old').checked) {
        console.log('old method');
        for (const string of input) {
            if (lookForVowels(string)) {
                if (lookForDoubleLetters(string)) {
                    if (lookForNaughtyGroups(string)) {
                        niceStrings.push(string);
                    }
                }
            }
        }
    } else {
        console.log('new method')
        for (const string of input) {
            if (lookForRepeatingPairs(string)) {
                if (lookForRepeatingLetters(string)) {
                    niceStrings.push(string);
                }
            }
        }
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

const lookForRepeatingPairs = string => {
    const listOfPairs = createPairs(string);

    for (let i = 0; i < listOfPairs.length; i++) {
        for (let j = 0; j < listOfPairs.length; j++) {
            if (i !== j && i + 1 < j && listOfPairs[i] === listOfPairs[j]) {
                return true;
            }
        }
    }

    return false;
};

const createPairs = string => {
    const listOfPairs = [];

    for (let i = 0; i < string.length; i++) {
        listOfPairs.push(string[i] + string[i + 1]);
    }
    return listOfPairs;
};

const lookForRepeatingLetters = string => {
    for (let i = 0; i < string.length - 2; i++) {
        if (string[i] === string[i + 2]) {
            return true;
        }
    }
    return false;
};

const renderResult = number => {
    const resultDIV = document.querySelector('.result');
    resultDIV.querySelector('span').innerText = number;
    resultDIV.style.visibility = 'visible';
};

document.querySelector('.button').addEventListener('click', findNiceStrings);