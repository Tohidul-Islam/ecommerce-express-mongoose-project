import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import { orderSchema } from './order.validation';

// created new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = orderSchema.parse(req.body.order);
    const result = await OrderServices.createOrderInDB(orderData);
    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({
      success: false,
      message: 'Data not found',
    });
  }
};

// get all orders
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.getAllOrdersFromDB();
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully for user email',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

// get specific order by using email
const getOrderByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const result = await OrderServices.getOrderByEmailFromDB(email);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  getOrderByEmail,
};
