const express = require('express')

const app = express()

app.get('/api', (req, res) =>
  res.json({ users: ['userOne', 'userTwo', 'userThree'] }),
)

app.get('/apibooks', (req, res) =>
  res.json({ books: ['bookOne', 'bookTwo', 'bookThree'] }),
)

app.get('/apianimals', (req, res) =>
  res.json({ books: ['dog', 'cat', 'rabbit'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)
app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)
app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruit', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.get('/apifruits', (req, res) =>
  res.json({ books: ['melon', 'apple', 'mango'] }),
)

app.listen(5000, () => {
  console.log('Application running on port 5000')
})
