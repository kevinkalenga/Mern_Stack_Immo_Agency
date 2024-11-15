import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/errors.js'
export const signup = async(req, res, next) => {
  const {username, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  // The model that we've been created so that to save the informations
  const newUser = new User({username, email, password:hashedPassword});
  try {
    await newUser.save()
    res.status(201).json("User created succussfully!")
  } catch (error) {
    next(error)
  }
 
}