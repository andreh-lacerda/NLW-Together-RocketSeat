import { Request, Response } from "express";
import { UserListReceiveComplimentsService } from "../services/UserListReceiveComplimentsService";

class UserListReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const userListReceiveComplimentsService = new UserListReceiveComplimentsService();

    const compliments = await userListReceiveComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { UserListReceiveComplimentsController };