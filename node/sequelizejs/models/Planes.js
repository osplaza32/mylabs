const Sequelize = require('sequelize')
const setupDatabase = require('../libs/singleton')
module.exports = function setupPlanesModel (config) {
  const sequelize = setupDatabase(config)

  return sequelize.define('Planes', {
    idPlanes: {
      type: Sequelize.UUID,
      allowNull: false,
      primaryKey: true

    },
    NombrePlan: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PlanUsuarios: {
      type: Sequelize.STRING,
      allowNull: false
    },
    PlanPuertas: {
      type: Sequelize.STRING,
      allowNull: false
   	}
  })
}