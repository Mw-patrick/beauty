import express from "express";
import dbConnection from "../util/db.js";
import { registerUser, loginUser, logOut } from "../controller/auth.controller.js"; 

const router = express.Router();

// REGISTER USER ROUTER
router.post("/register", registerUser);

// LOGIN USER ROUTER
router.post("/login", loginUser);

// LOGOUT ROUTER
router.get("/logout", logOut);

export default router;
