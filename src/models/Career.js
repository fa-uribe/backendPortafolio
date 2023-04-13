import { Schema, model } from "mongoose";

const careerSchema = new Schema ({
    career_name: String,

},
{
    timestamps: true,
    versionKey: false
})

export default model('Career', careerSchema);