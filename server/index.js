const express = require('express')

const app = express()
const port = 3001

const messagesController = require('./controllers/messages_controller')

app.use(express.json())

const messagesUrl = '/api/messages'

app.get('/api/messages')
app.get(messagesUrl, messagesController.read)
app.post(messagesUrl, messagesController.create)
app.put(`${messagesUrl}/:id`, messagesController.update)
app.delete(`${messagesUrl}/:id`, messagesController.delete)


app.listen(port, ()=> console.log(`listening on port ${port}`))