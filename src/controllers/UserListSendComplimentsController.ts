import { Request, Response } from "express";
import { UserListSendComplimentsService } from "../services/UserListSendComplimentsService";

class UserListSendComplimentsController {

  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const userListSendComplimentsService = new UserListSendComplimentsService();

    const compliments = await userListSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}

export { UserListSendComplimentsController };