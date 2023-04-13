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
    career: [{
      type: Schema.Types.ObjectId,
      ref: "Career"
    }],
    status: Boolean,
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