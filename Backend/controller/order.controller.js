import Order from "../models/order.model.js";
import asyncHandler from "express-async-handler";

// CREATE ORDER
const createOrder = asyncHandler(async(requestAnimationFrame,res) =>{
    const newOrder = Order(req.body);
    const savedOrder = await newOrder.save();
    if(!savedOrder){
        res.status(400);
        throw new Error("Order was not created");
    }else {
        res.status(201).json(savedOrder);
    }
});

// UPDATE ORDER
const updateOrder = asyncHandler(async(req,res) =>{
    const updateOrder = await Order.findByIdAndUpdate(
        req.params.id,
        {$set: req.body},
        {new: true}
    );

    if(!updateOrder){
        res.status(400);
        throw new Error("Order was not updated");
    }else{
        res.status(201).json(updateOrder);
    }
});

// DELETE ORDER
const deleteOrder = asyncHandler(async(req,res) =>{
    const order = await Order.findByIdAndDelete(req.params.id);
    if(!order){
        res.status(400);
        throw new Error("Order was not  deleted successfully");
    }else{
        res.status(200).json(order);
    }
});

// GET USER ORDER
const getUserOrder = asyncHandler(async(req,res) =>{
    const orders = await Order.find({userId: req.params.id}).reverse();
    if(!orders){
        res.status(400);
        throw new Error("No order was found or something went wrong");
    }else{
        res.status(200).json(orders);
    }
});

// GET ALL ORDES
const getAllOrders = asyncHandler(async(req,res) =>{
    const orders = await Order.find();
    if(!orders){
        res.status(400);
        throw new Error("No order was found or something went wrong");
    }else{
        res.status(200).json(orders);
    }
}); 


export {getAllOrders, getUserOrder, updateOrder, deleteOrder, createOrder};