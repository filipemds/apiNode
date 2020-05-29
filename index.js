const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const port = 3000
const useRoute = require('./routes/userRoute')

app.use(bodyParser.urlencoded({ extended: false }))
useRoute(app)

app.get('/', (req, res) => res.send('Api rodando com Express'))
app.listen(3000, () => console.log('Api rodando na porta 3000'))
