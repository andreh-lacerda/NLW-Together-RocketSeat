import { Request, Response } from "express";
import { TagsListService } from "../services/TagsListService";

class TagsListController {
  async handle(request: Request, response: Response) {
    const tagListService = new TagsListService();

    const tags = await tagListService.execute();

    return response.json(tags);
  }
}

export { TagsListController }