import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import bodyParser from 'body-parser';

//Espacio para rutas

//

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


app.get('/', (req, res) => {
    res.json({Message: "Backend API started successfuly"})
})

export default app;