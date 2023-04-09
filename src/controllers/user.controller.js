import User from '../../models/User'
import jwt from 'jsonwebtoken'
import config from '../../config'
import Role from '../../models/Role'

export const register = async (req, res) => {
    const { username, password, email } = req.body
    const userRole = await Role.find({name : "user"})
    const newUser = User({ username, password: await User.encryptPassword(password), email, roles: userRole, estado: true })

    const saveUser = await newUser.save();
    const token = jwt.sign({id: saveUser._id}, config.SECRET, { expiresIn: 86400 })
    return res.status(200).json("El usuario ha sido creado con exito")
}
