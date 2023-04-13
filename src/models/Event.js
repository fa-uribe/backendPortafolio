import { Schema, model } from "mongoose";

const eventSchema = new Schema ({
    event_name: String,
    description: String,
    start_date: Date,
    finish_date: Date,
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