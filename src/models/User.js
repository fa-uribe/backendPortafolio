import { Schema, model } from "mongoose";
import bcrypt  from 'bcryptjs';

const userSchema = new Schema({
    username:     String,
    password:     String,
    email:        String,
    roles: [{
        type: Schema.Types.ObjectId,
        ref: "Role"
    }],
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: "Subject"
    }],
    state: Boolean,
}, {
    timestamps: true,
    versionKey: false
})

  userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  
  userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
  }

export default model('User', userSchema);