import Event from '../models/Event.js';
import User from '../models/User.js';
import Subject from '../models/Suject.js';

export const eventCreate = async (req, res) => {
    const user = await User.findById(req.userId);
    const subject = await Subject.findById(req.params.subjId);
    const { event_name, description, start_date, end_date } = req.body;
    const newEvent = Event({ event_name, description, start_date, end_date, user, subject });
    const saveEven = await newEvent.save();

    return res.status(200).json("Event created");
}

export const eventEdit = async (req, res) => {
    const { event_name, description, start_date, end_date } = req.body;
    const editData = await Event.findByIdAndUpdate(req.params.id, { event_name, description, start_date, end_date });

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