require('./config/mongoose')
const cors = require('cors')
const express = require('express');
const app = express();
const logger = require('morgan')
const productRoutes = require('./routes/productRoutes')


//middleware logger
app.use(logger('dev'))

//cors
app.use(cors())

//menangani request method post dari form
app.use(express.urlencoded({extended: true}));
//menangani request method post berupa json
app.use(express.json());

//routes home and product
app.use('/api/v4', productRoutes)

//404 page/response
app.use((req, res, next) => {
    res.status(404)
    res.send({
        status: "failed",
        message: req.originalUrl + " not found"
    })
})


app.listen(4000, () => console.log("server berjalan di port 4000"))