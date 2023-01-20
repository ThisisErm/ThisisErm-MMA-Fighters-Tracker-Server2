const express = require('express')

const router = express.Router()

const Fighter = require('../models/fighter')

const startingFighters = [
	{
		firstName: 'Randi',
		lastName: 'Couture',
		wins: 19,
		losses: 11,
		draws: 0
	},
	{
		firstName: 'Forrest ',
		lastName: 'Griffin',
		wins: 19,
		losses: 7,
		draws: 0
	},
	{
		firstName: "Quinton 'Rampage'",
		lastName: 'Jackson',
		wins: 38,
		losses: 14,
		draws: 0
	},
]

// /seed/fighters
router.get('/fighters', (req, res, next) => {
    Fighter.deleteMany({})
        .then(() => {
            Fighter.create(startingFighters)
                .then(fighters => {
                    res.status(200).json({ fighters: fighters })
                })
        })
        .catch(next)
})

module.exports = router