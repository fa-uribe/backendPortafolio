import User from "../models/User";
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from "../models/Role";
import * as dotenv from 'dotenv';
dotenv.config();

export const signUp = async (req, res) => {
    const { username, password, email } = req.body;
    const role = await Role.find({name: "user"});

    const newUser = User({ username, password: await User.encryptPassword(password), email, roles: role, state: true});

    if ( newUser ) {
        newUser.save();
        res.status(200).json(username + " Te has registrado correctamente en MyEstCalendar ya puedes iniciar sesion");
    } else {
        res.status(400).json( "No hemos podido registrarte" )
    }

}
export const signIn = async (req, res) => {
    const userFound = await User.findOne({email: req.body.email, state: true}).populate("roles")

    const userFound2 = await User.find({email: req.body.email, state: true});

    const rl = userFound2.map(rol => rol.roles);

    const rol = rl.toString(rl);

    if (!userFound) return res.status(400).json({Error: "Usuario no encontrado"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.status(401).json({token: null, message: "Contraseña inválida"})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        expiresIn: 86400
    })

    res.json({token, rol})
}