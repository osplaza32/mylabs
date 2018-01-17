'use strict'

const setupDatabase = require('./libs/singleton')
const setupPlanesModel = require('./models/Planes')

module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const PlaneModel = setupPlanesModel(config)

  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: true })
  }

  const plan = {}

  return {
    plan  
  }
}