import express from 'express'
import morgan from "morgan"
import cors from 'cors'
import bodyParser from 'body-parser'

import { createRoles } from './libs/initialSetup.js'

//import de routes
import authRoutes       from './routes/authentication/auth.routes'
import userRoutes       from './routes/user.routes.js'
import careerRoutes     from './routes/career.routes.js'

const app = express()
createRoles()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
    res.json( "Backend API working properly" )
})

//Espacio para rutas
app.use('/myEstCalendarAPI/auth'      , authRoutes)
app.use('/myEstCalendarAPI/user'      , userRoutes)
app.use('/myEstCalendarAPI/career'    , careerRoutes)
//
export default app;