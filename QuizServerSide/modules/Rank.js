const { scoresList } = require('../assets/TestData.js')

const Rank = (req, res) => {
    const { score } = req.body;
    // if not send score in body
    if (score !== undefined) {
        let count = 0, Rank;
        // count scores below score 
        for (let i = 0; i < scoresList.length; i++) {
            if (scoresList[i] < score) count++
        }
        // calculate Rank round to 2digits
        Rank = (count / scoresList.length) * 100;
        Rank = Math.round((Rank + Number.EPSILON) * 100) / 100
        res.json({ Rank });
    } else {
        res.json({ 'error': 'must send score' });
    }

}


module.exports = {
    Rank
}