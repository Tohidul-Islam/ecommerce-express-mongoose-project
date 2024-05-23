import { z } from 'zod';

export const orderSchema = z.object({
  email: z.string().email(),
  productId: z.string().regex(/^[0-9a-fA-F]{24}$/),
  price: z.number().positive(),
  quantity: z.number().positive(),
});
