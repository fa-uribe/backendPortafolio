import Event from '../models/Event.js';
import User from '../models/User.js';
import Subject from '../models/Suject.js';
import moment from 'moment/moment.js';

moment.locale();

export const eventCreate = async (req, res) => {
    const user = await User.findById(req.userId);
    const { event_name, description, event_date, start_hour, end_hour, subject } = req.body;
    const newEvent = Event({ event_name, description, event_date, start_hour, end_hour, user: user, subject, notified: false });
    const saveEvent = await newEvent.save();

    return res.status(200).json("Event created");
}

export const eventEdit = async (req, res) => {
    const { event_name, description, event_date, start_hour, end_hour } = req.body;
    const editData = await Event.findByIdAndUpdate(req.params.id, { event_name, description, event_date, start_hour, end_hour });

    return res.status(200).json("Event edited");
}

export const eventsDisplay = async (req, res) => {
    const currentUser = await User.findById(req.userId);
    const events = await Event.find({ user: currentUser });

    return res.status(200).json(events);
}

export const eventDisplay = async (req, res) => {
    const event = await Event.findById(req.params.id);

    return res.status(200).json(event);
}

export const eventDelete = async (req, res) => {
    const eventData = await Event.findByIdAndDelete(req.params.id);

    return res.status(200).json("Event deleted");
}

export const dailyEvents = async (req, res) => {
    const currentUser = await User.findById(req.userId);
    
    const eventsData = await Event.find({ user: currentUser });

    const eventsDisplay = eventsData.filter((event) => {
        const day = moment(req.params.day).format("DD-MM-YYYY");
        const event_date = moment(event.event_date).format("DD-MM-YYYY");

        return event_date === day;
    });

    return res.status(200).json(eventsDisplay)
}