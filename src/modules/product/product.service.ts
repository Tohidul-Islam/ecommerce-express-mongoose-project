import { TProduct } from './product.interface';
import ProductModel from './product.model';

const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

const updateProductInDB = async (id: string, updateData: Partial<TProduct>) => {
  const result = await ProductModel.findOneAndUpdate(
    { id },
    { $set: updateData },
    { new: true }
  );

  console.log('Update Result:', result);

  return result;
};

const deleteProductFromDB = async (id: string) => {
  try {
    const result = await ProductModel.findOneAndDelete({ id });

    if (!result) {
      throw new Error('Product not found');
    }

    return result;
  } catch (error) {
    console.log(error);
  }
};

// seaching product
const searchProductsByNameFromDB = async (
  name: string
): Promise<TProduct[]> => {
  const regex = new RegExp(name, 'i');
  const products = await ProductModel.find({ name: regex });
  return products;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
  searchProductsByNameFromDB,
};
