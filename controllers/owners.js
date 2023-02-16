const { Owner } = require('../models')

const create = async (req, res) => {
  try {
    const owner = await Owner.create(req.body)
    res.status(200).json(owner)
  } catch (error) {
    res.status(500).json(error)
  }
}

const index = async (req, res) => {
  try {
    const owners = await Owner.findAll()
    res.status(200).json(owners)
  } catch (error) {
    res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id)
    owner.set(req.body)
    await owner.save()
    res.status(200).json(owner)
  } catch (error) {
    res.status(500).json(error)
  }
}

const deleteOwner = async (req, res) => {
  try {
    const owner = await Owner.findByPk(req.params.id)
    await owner.destroy()
    res.status(200).json(owner)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  create, 
  index,
  update,
  delete: deleteOwner,

}