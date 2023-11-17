const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
app.use(express.json())

const postRoute = require('./routes/postsRoute')


app.use('/api/posts/', postRoute)


const port = 5004
app.get('/', (req, res) => res.send('Hello'))
app.listen(port, () => console.log(`app listening on port ${port}`))