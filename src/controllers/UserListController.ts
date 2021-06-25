import { Request, Response } from "express";
import { UserListService } from "../services/UserListService";

class UserListController {
  async handle(request:Request, response:Response){
    const userListService = new UserListService();

    const users = await userListService.execute();

    return response.json(users);
  }
}

export { UserListController };