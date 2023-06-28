import express from 'express'
import morgan from "morgan"
import cors from 'cors'
import bodyParser from 'body-parser'
import { createRoles } from './libs/initialSetup.js'
import { sendEventNotification } from '../src/mail/mailNotifications.js'
import Event from '../src/models/Event.js'
import moment from 'moment';

// Importa las rutas
import authRoutes from './routes/authentication/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import careerRoutes from './routes/career.routes.js'
import calendarRoutes from './routes/calendar/calendar.routes.js'

const app = express()
createRoles()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json("Backend API working properly")
})

app.get('/eventos', async (req, res) => {
    try {
      const eventos = await Event.find({notified: false});
      
      for (const evento of eventos) {
        const eventDate = moment(evento.event_date, 'YYYY-MM-DD'); 
        const today = moment();
        const differenceInDays = eventDate.diff(today, 'days');
  
        if (differenceInDays > 0 && differenceInDays <= 1) {
          await sendEventNotification(evento);
          const deactivateNotf = await Event.findByIdAndUpdate(evento._id, { notified: true });
        }
      }
  
      res.json("Enviando mail de notificaion a usuarios registrados");
    } catch (error) {
      console.error('Error al obtener los eventos:', error);
      res.status(500).json({ error: 'Error al obtener los eventos' });
    }
  });

// Espacio para rutas existentes
app.use('/myEstCalendarAPI/auth', authRoutes)
app.use('/myEstCalendarAPI/user', userRoutes, calendarRoutes)
app.use('/myEstCalendarAPI/career', careerRoutes)

export default app;