import { Request, Response, NextFunction } from "express";

class AdminController {
  async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    res.json({
      success: true,
      message: "index admin route",
    });
  }
}

export default new AdminController();
