'use strict'

const db = require('./')
const debug = require('debug')('platziverse:db:setup')

async function setup () {
  const config = {
    database: process.env.DB_NAME || 'test1',
    username: process.env.DB_USER || 'someuser',
    password: process.env.DB_PASS || 'somepassword',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    setup: true
  }

  await db(config).catch(handleFatalError)

  console.log('Success!')
  process.exit(0)
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

setup()