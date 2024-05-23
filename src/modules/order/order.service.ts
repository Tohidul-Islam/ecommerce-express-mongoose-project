import { TOrder } from './order.interface';
import OrderModel from './order.model';

// create order
const createOrderInDB = async (order: TOrder) => {
  const result = await OrderModel.create(order);
  return result;
};

// get all orders
const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};

// get specific order by email
const getOrderByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};

export const OrderServices = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrderByEmailFromDB,
};
