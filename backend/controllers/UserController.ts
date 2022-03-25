import { Request, Response, NextFunction } from "express";

class UserController {
  async getUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({
      success: true,
      message: "get user route",
    });
  }
  async createUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({
      success: true,
      message: "create user route",
    });
  }
  async updateUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({
      success: true,
      message: "update user route",
    });
  }
  async deleteUser(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    res.json({
      success: true,
      message: "delete user route",
    });
  }
}

export default new UserController();
