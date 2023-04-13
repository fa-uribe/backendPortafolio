import { Schema, model } from "mongoose";

const subjectSchema = new Schema ({
    subject_name: String,
    career: [{
        type: Schema.Types.ObjectId,
        ref: "Career"
    }]

},
{
    timestamps: true,
    versionKey: false
})

export default model('Subject', subjectSchema);