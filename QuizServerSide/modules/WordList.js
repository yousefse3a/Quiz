const { wordList } = require('../assets/TestData')

const Words = (req, res) => {
    const  num_of_ques =3;
    const WordListLength = Object.keys(wordList).length; // get numbers of questions in WordList 
    const category = ['adverb', 'verb', 'noun', 'adjective'];

    let words = []; // array of words
    let randoms = []; // array for all randoms 
    let acceptRandoms = [] // array for the index of words from WordList

    // get number of questions according to each category (POS)
    let { num_of_Category1, num_of_Category2, num_of_Category3, num_of_Category4 } = get_4_num_upto_10(num_of_ques);

    // fill words array with Words from WordList according to each number of category (POS) size 
    while ((randoms.length < WordListLength) && (words.length < num_of_ques)) {
        let r = randomBetween(0, WordListLength)
        if (randoms.indexOf(r) === -1) {
            randoms.push(r)
            switch (wordList[r].pos) {
                case category[0]:
                    if (num_of_Category1) {
                        words.push(wordList[r]);
                        num_of_Category1--;
                        acceptRandoms.push[r];
                    }
                    break;
                case category[1]:
                    if (num_of_Category2) {
                        words.push(wordList[r]);
                        num_of_Category2--;
                        acceptRandoms.push[r];
                    }

                    break;
                case category[2]:
                    if (num_of_Category3) {
                        words.push(wordList[r]);
                        num_of_Category3--;
                        acceptRandoms.push[r];
                    }

                    break;
                case category[3]:
                    if (num_of_Category4) {
                        words.push(wordList[r]);
                        num_of_Category4--;
                        acceptRandoms.push[r];
                    }
                    break;
            };
        }
    }
    // if max size of category in WordList not cover the number of category fill words array with other category
    while (words.length < num_of_ques) {
        let r = randomBetween(0, WordListLength);
        if (acceptRandoms.indexOf(r) === -1) {
            words.push(wordList[r])
        }
    }
    res.json(words);
}

function randomBetween(min, num_of_ques) {
    return Math.floor(Math.random() * (num_of_ques - min) + min)
}

function get_4_num_upto_10(num_of_ques) {
    let num_of_Category1 = randomBetween(1, num_of_ques - 3);
    let num_of_Category2 = randomBetween(1, num_of_ques - 2 - num_of_Category1);
    let num_of_Category3 = randomBetween(1, num_of_ques - 1 - num_of_Category1 - num_of_Category2);
    let num_of_Category4 = num_of_ques - num_of_Category1 - num_of_Category2 - num_of_Category3;

    return { num_of_Category1, num_of_Category2, num_of_Category3, num_of_Category4 };
}

module.exports = {
    Words
}