import express from 'express';
import morgan from "morgan";
import cors from 'cors';
import bodyParser from 'body-parser';

import { createRoles } from './libs/initialSetup.js';

//import de routes
import authRoutes       from './routes/authentication/auth.routes';

const app = express()
createRoles();

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json({Message: "Backend API started successfuly"})
})

//Espacio para rutas
app.use('/myEstCalendarAPI/auth'      , authRoutes);
//
export default app;