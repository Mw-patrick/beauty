import express from "express";
const router = express.Router();
import {getAllOrders, getUserOrder, updateOrder, deleteOrder, createOrder} from "../controller/order.controller.js";
import protect from "../Middleware/auth.middleware.js";

// CREATE ORDER ROUTE
router.post("/", createOrder);
// UPDATE ORDER ROUTE
router.put("/", updateOrder);
// GET ALL ORDERS ROUTE
router.get("/",protect, getAllOrders);
// DELETE ORDER ROUTE
router.delete("/", deleteOrder);
//GET USER'S ORDER ROUTE
router.get("/find/:userId", getUserOrder);

export default router;