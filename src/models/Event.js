import { Schema, model } from "mongoose";

const eventSchema = new Schema ({
    event_name: String,
    description: String,
    event_date: String,
    start_hour: String,
    end_hour: String,
    notified: Boolean,
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    subject: [{
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }]

},
{
    timestamps: true,
    versionKey: false
})

export default model('Event', eventSchema);