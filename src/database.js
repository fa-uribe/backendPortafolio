import mongoose from 'mongoose'


mongoose.connect("mongodb+srv://fa-uribe:Favix140441@myestcalendar.vybkqe1.mongodb.net/myEstCalendar", {
    
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err))