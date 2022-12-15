import TodoCard from '../domain/TodoCard';
import ITodoCard from '../interfaces/ITodoCard';
import TodoCardODM from '../models/TodoCardODM';

class TodoCardService {
  private createTodoCardDomain(todoCard: ITodoCard | null): TodoCard | null {
    if (todoCard) {
      return new TodoCard(todoCard.title, todoCard.content, todoCard.list, todoCard.id);
    }
    return null;
  }

  public async create(todoCard: ITodoCard) {
    const todoCardODM = new TodoCardODM();
    const newTodoCard = await todoCardODM.create(todoCard);
    return this.createTodoCardDomain(newTodoCard);
  }

  public async getAll() {
    const todoCardODM = new TodoCardODM();
    const allTodoCards = await todoCardODM.getAll();
    return allTodoCards.map((todoCards) => this.createTodoCardDomain(todoCards));
  }

  public async deleteById(id: string) {
    const todoCardODM = new TodoCardODM();
    const todoCardDeleted = await todoCardODM.deleteById(id);

    if (todoCardDeleted) {
      return this.getAll();
    }
    return todoCardDeleted;
  }

  // public async update(todoCard: ITodoCard) {}
  // public async checkIsEmpty() {}
}

export default TodoCardService;
