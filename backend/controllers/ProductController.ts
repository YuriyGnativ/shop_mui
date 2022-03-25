import { Request, Response, NextFunction } from "express";
import { ProductModel } from "../models/ProductModel";

class ProductController {
  async getProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { id: productUrl } = req.params;
    try {
      const productData = await ProductModel.findOne({
        url: productUrl,
      }).catch((error) => {
        console.log(error);
      });
      res.json({
        status: "success",
        data: productData,
      });
    } catch (error) {
      res.json({
        status: "error",
        message: "Can't find product with such url",
      });
    }
  }
  async createProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    const { data } = req.body;
    try {
      const newProduct = await ProductModel.create({
        ...data,
      });
      if (newProduct) {
        const all = await ProductModel.find({});
        res.json({
          success: true,
          data: all,
        });
      } else {
        res.json({
          success: true,
          message: "Entity hasn't created...",
        });
      }
    } catch (error) {
      res.json({
        success: false,
        message: "Something went wrong...",
      });
    }
  }
  async updateProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
  async deleteProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {}
}

export default new ProductController();
