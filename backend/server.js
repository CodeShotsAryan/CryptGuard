const express = require('express');
const apiRouter = require('./routes/apiRoutes')

const app = express()
const PORT = 3123;

app.use(express.json())
app.use('/api',apiRouter)
app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });
app.listen(PORT,()=>{
    console.log(`server listening on ${PORT}`);
})

