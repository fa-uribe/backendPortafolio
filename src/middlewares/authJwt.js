import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';
import User from '../models/User';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: "Token not generated"})

        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;
        
        const user = await User.findById(req.userId, {password: 0});

        if (!user) return res.status(404).json({message: "This user does not exist"});

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"})
    }
}

export const isAdmin = async (req, res, next) => {
    const user  = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    for(let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next();
            return;
        }
    }
    
    return res.status(403).json({message: 'Admin role required'})
}

export const isUser = async (req, res, next) => {
    const user  = await User.findById(req.userId);
    const roles = await Role.find({_id: {$in: user.roles}});

    for(let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
            next();
            return;
        }
    }
   
    return res.status(403).json("There was an error verifying your user role")
}