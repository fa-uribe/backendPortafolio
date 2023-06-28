import User from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from "../models/Role";
import * as dotenv from 'dotenv';
import Career from "../models/Career";
dotenv.config();

export const signUp = async (req, res) => {
    try {
        const { username, password, email, career } = req.body;
        const role = await Role.find({name: "user"});
        const careerFind = await Career.find({ career_name: career })

        const newUser = User({ username, password: await User.encryptPassword(password), email, roles: role, status: true, career: careerFind});

        if ( newUser ) {
            newUser.save();
            res.status(200).json("Welcome " + username + ", you have successfully registered on MyEstCalendar, you can now Log In");
        } else {
            res.status(400).json( "We couldn't register your user" )
        }
    }
    catch(err){
        res.status(400).json(err);
    }

}
export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email, status: true}).populate("roles")
    const userData = await User.find({email: req.body.email, status: true});
    const rl = userData.map(rol => rol.roles);
    const rol = rl.toString(rl);

    if (!userFound) return res.status(404).json({Error: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, Error: "Invalid password"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 100000000,
    })

    res.json({token, userData})
}