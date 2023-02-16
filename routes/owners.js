const router = require('express').Router()
const ownersCtrl = require('../controllers/owners.js')

router.post('/', ownersCtrl.create)



module.exports = router