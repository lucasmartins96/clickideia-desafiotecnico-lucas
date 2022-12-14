import { NextFunction, Request, Response } from 'express';
import TodoCardService from '../services/TodoCardService';
import ITodoCard from '../interfaces/ITodoCard';

class TodoCardController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: TodoCardService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new TodoCardService();
  }

  public async create() {
    const todoCard: ITodoCard = {
      title: this.req.body.title,
      content: this.req.body.content,
      list: this.req.body.list,
    };

    try {
      const newTodoCard = await this.service.insert(todoCard);
      return this.res.status(201).json(newTodoCard);
    } catch (error) {
      this.next(error);
    }
  }
}

export default TodoCardController;
