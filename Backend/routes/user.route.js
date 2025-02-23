import express from "express";
const router = express.Router();
import {updateUser, deleteUser, getUser, getAllUsers} from "../controller/user.controller.js";


//GET ALL USERS ROUTE
router.get("/", getAllUsers);

// DELETE USER ROUTE
router.delete("/:id", deleteUser);

// UPDATE USER ROUTE
router.put("/:id", updateUser);

// GETONE USER ROUTE
router.get("/find/:userId", getUser);

export default router;