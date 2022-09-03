require('dotenv').config();
var cors = require('cors')
const express = require("express");
const { router } = require('./modules/Router');
const app = express();
app.use(cors())
app.use(express.json());
app.use(router)
// const category = ['adverb', 'verb', 'noun', 'adjective']
// app.get("/Quiz/Words", (req, res, next) => {
//     let questions = [];
//     let randoms = []
//     let acceptRandoms = []
//     let num_of_ques = 10;
//     let num_of_option1 = randomBetween(1, num_of_ques - 3);
//     let num_of_option2 = randomBetween(1, num_of_ques - 2 - num_of_option1);
//     let num_of_option3 = randomBetween(1, num_of_ques - 1 - num_of_option1 - num_of_option2);
//     let num_of_option4 = num_of_ques - num_of_option1 - num_of_option2 - num_of_option3;
//     while ((randoms.length < (Object.keys(wordList).length)) && (questions.length < num_of_ques)) {
//         let r = randomBetween(0, (Object.keys(wordList).length))
//         if (randoms.indexOf(r) === -1) {
//             randoms.push(r)
//             switch (wordList[r].pos) {
//                 case category[0]:
//                     if (num_of_option1) {
//                         questions.push(wordList[r]);
//                         num_of_option1--;
//                         acceptRandoms.push[r];
//                     }
//                     break;
//                 case category[1]:
//                     if (num_of_option2) {
//                         questions.push(wordList[r]);
//                         num_of_option2--;
//                         acceptRandoms.push[r];
//                     }

//                     break;
//                 case category[2]:
//                     if (num_of_option3) {
//                         questions.push(wordList[r]);
//                         num_of_option3--;
//                         acceptRandoms.push[r];
//                     }

//                     break;
//                 case category[3]:
//                     if (num_of_option4) {
//                         questions.push(wordList[r]);
//                         num_of_option4--;
//                         acceptRandoms.push[r];
//                     }
//                     break;
//             };
//         }
//     }
//     while (questions.length < num_of_ques) {
//         let r = randomBetween(0, (Object.keys(wordList).length));
//         if (acceptRandoms.indexOf(r) === -1) {
//             questions.push(wordList[r])
//         }
//     }
//     function randomBetween(min, num_of_ques) {
//         return Math.floor(Math.random() * (num_of_ques - min) + min)
//     }
   

//     res.json(questions);
// });
// app.get("/Quiz/Rank", (req, res, next) => {
//     res.send("users");
// });


app.listen(+process.env.PORT || 4000, () => {
    console.log(`run on port ${process.env.PORT}`);
})