import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/product/product.route';
import { OrderRoutes } from './modules/order/order.route';

const app: Application = express();

app.use(express.json());
app.use(cors());

//  router
app.use('/api/products', ProductRoutes);
app.use('/api/orders', OrderRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello eCommerce Project!');
};
app.get('/', getAController);

export default app;
