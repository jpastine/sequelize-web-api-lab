const router = require('express').Router()
const ownersCtrl = require('../controllers/owners.js')

router.get('/', ownersCtrl.index)
router.post('/', ownersCtrl.create)
router.put('/:id', ownersCtrl.update)
router.delete('/:id', ownersCtrl.delete)



module.exports = router