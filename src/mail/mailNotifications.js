import User from '../models/User.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: "no.reply.estcalendar@gmail.com",
        pass: "mtvqyncfiolebfcq"
    },
});

export const sendEventNotification = async (evento) => {
  
  const eventUser = await User.findById(evento.user[0])

  const mailOptions = {
    from: 'no.reply.estcalendar@gmail.com', 
    to: eventUser.email, 
    subject: 'Recordatorio de evento',
    text: `"${evento.event_name}" comenzará pronto. ¡No te olvides! \n
    ${evento.event_name} \n
    ${evento.description} \n
    ${evento.start_hour} - ${evento.end_hour}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado a', eventUser.email);
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};