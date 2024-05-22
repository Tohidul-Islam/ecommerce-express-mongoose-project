import { Request, Response } from 'express';
import { ProductServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body.product;
    const result = await ProductServices.createProductIntoDB(productData);

    //send response
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Product are received successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Single Product found successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;

    if (!updateData) {
      throw new Error('Update data is not found');
    }
    console.log(`Updating product with ID: ${productId}`);
    console.log('Update Data:', updateData);

    const result = await ProductServices.updateProductInDB(
      productId,
      updateData
    );

    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });

    if (!result) {
      return;
      res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: deletedProduct,
    });
  } catch (error) {
    console.error(error);
  }
};

const searchProductsByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      });
    }
    const products = await ProductServices.searchProductsByNameFromDB(
      name.toString()
    );
    res.status(200).json({
      success: true,
      message: `Products matching search term '${name}' fetched successfully`,
      data: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'no products found',
    });
  }
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProductsByName,
};
