import { Schema, model } from "mongoose";

const subjectSchema = new Schema ({
    name: String,

},
{
    timestamps: true,
    versionKey: false
})

export default model('Subject', subjectSchema);