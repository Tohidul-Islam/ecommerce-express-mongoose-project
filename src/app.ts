import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './modules/product/product.route';
const app: Application = express();
// const port = 3000;

app.use(express.json());
app.use(cors());

// application router
app.use('/api/products', ProductRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};
app.get('/', getAController);

export default app;
