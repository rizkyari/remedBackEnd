const express = require('express')
const cors = require('cors')
const karyawan = require('./routers/karyawan')



const app = express()
const port = 2010 // akses dari environment

app.get('/', (req, res) => {
    res.send(`<h1> API RUNNING ON HEROKU PORT ${port} </h1>`)
})

app.use(cors())
app.use(express.json())
app.use(karyawan)



app.listen(port, ()=>{
    console.log("Running on port:", port);
    
})