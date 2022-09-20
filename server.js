const express = require('express')

const app = express()

app.get('/api', (req, res) =>
  res.json({ users: ['userOne', 'userTwo', 'userThree'] }),
)

app.get('/apibooks', (req, res) =>
  res.json({ books: ['bookOne', 'bookTwo', 'bookThree'] }),
)



app.listen(5000, () => {
  console.log('Application running on port 5000')
})

