import express from 'express';
import {test, updateUser, deleteUser, getUserListings, getUser} from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyUser.js'
const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser)
router.delete('/delete/:id', verifyToken, deleteUser)
router.get('/listings/:id', verifyToken, getUserListings)
router.get('/:id', verifyToken, getUser)

// We can change it name as we have exported as a default
export default router;