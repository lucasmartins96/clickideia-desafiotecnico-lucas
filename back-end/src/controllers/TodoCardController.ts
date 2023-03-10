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
      const newTodoCard = await this.service.create(todoCard);
      return this.res.status(201).json(newTodoCard);
    } catch (error) {
      console.log(error);
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allTodoCards = await this.service.getAll();
      return this.res.status(200).json(allTodoCards);
    } catch (error) {
      console.log(error);
      this.next(error);
    }
  }

  public async deleteById() {
    const id = this.req.params.id;

    try {
      const allTodoCards = await this.service.deleteById(id);

      if (!allTodoCards) {
        return this.res.status(404).json({ message: 'TodoCard not found' });
      }

      return this.res.status(200).json(allTodoCards);
    } catch (error) {
      console.log(error);
      this.next(error);
    }
  }

  public async updateById() {
    const todoCard: ITodoCard = {
      id: this.req.params.id,
      title: this.req.body.title,
      content: this.req.body.content,
      list: this.req.body.list,
    };

    try {
      const newTodoCard = await this.service.updateById(todoCard);

      if (!newTodoCard) {
        return this.res.status(404).json({ message: 'TodoCard not found' });
      }

      return this.res.status(200).json(newTodoCard);
    } catch (error) {
      console.log(error);
      this.next(error);
    }
  }
}

export default TodoCardController;
