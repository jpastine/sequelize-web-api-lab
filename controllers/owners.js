const { Owner } = require('../models')

const create = async (req, res) => {
  try {
    const owner = await Owner.create(req.body)
    res.status(200).json(owner)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create, 
  
}