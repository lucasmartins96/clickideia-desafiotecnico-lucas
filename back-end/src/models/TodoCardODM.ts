import { Model, Schema, model, models } from 'mongoose';
import ITodoCard from '../interfaces/ITodoCard';

class TodoCardODM {
  private schema: Schema;
  private model: Model<ITodoCard>;

  constructor() {
    this.schema = new Schema<ITodoCard>({
      title: { type: String, required: true },
      content: { type: String, required: true },
      list: { type: String, required: true },
    });
    this.model = models.TodoCard || model('TodoCard', this.schema);
  }

  public create(todoCard: ITodoCard): Promise<ITodoCard> {
    return this.model.create({ ...todoCard });
  }

  public getAll(): Promise<ITodoCard[]> {
    return this.model.find({}).exec();
  }

  public deleteById(id: String): Promise<ITodoCard | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}

export default TodoCardODM;
