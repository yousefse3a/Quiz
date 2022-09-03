const { Rank } = require('./Rank');
const { Words } = require('./WordList');

const router = require('express').Router();

router.get('/Words', Words);
router.post('/Rank', Rank);

module.exports = {
    router
}