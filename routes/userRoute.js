const fs = require('fs')
const { join } = require('path')

const filePath = join(__dirname, 'users.json')

const getUsers = () => {
  const data = fs.existsSync(filePath)
    ? fs.readFileSync(filePath)
    : []
  try {
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

const userRoute = (app) => {
  app.route('/users/:id?')
    .get((req, res) => {
      const users = getUsers()

      res.send({ users })
    })
    .post((req, res) => {
      const users = getUsers()
      users.push(req.body)
      saveUser(users)
      res.send(201).send('OK')
    })
}

module.exports = userRoute