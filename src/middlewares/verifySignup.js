import Role, { ROLES } from '../models/Role';
import User from '../models/User';


export const checkRolesExisted = async (req, res, next) => {
    if ( req.body.roles ) {
        const roles = await Role.find({_id: req.body.roles});
        if ( roles.length > 0 ) {
        } else {
            return res.status(400).json("Role does not exist in DB");
        }
    }
    next();
    
}

export const checkDuplicateEmail = async (req, res, next) => {
    const user = await User.findOne( { email: req.body.email } )
    if (user) return res.status(400).json('Email already registered on MyEstCalendar');

    next();
}