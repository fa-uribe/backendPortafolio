import Event from '../models/Event.js';
import User from '../models/User.js';
import Subject from '../models/Suject.js';

export const eventCreate = async (req, res) => {
    const user = await User.findById(req.userId);
    const subject = await Subject.findById(req.params.subjId);

    const { event_name, description, start_date, end_date } = req.body;

    const newEvent = Event({ event_name, description, start_date, end_date, user, subject });
    const saveEven = await newEvent.save();
}