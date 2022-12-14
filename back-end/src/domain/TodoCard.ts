class TodoCard {
  private id: string | undefined;
  private title: string;
  private content: string;
  private list: string;

  constructor(title: string, content: string, list: string, id: string | undefined) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.list = list;
  }

  public setId(id: string) {
    this.id = id;
  }

  public getId() {
    return this.id;
  }

  public setTitle(title: string) {
    this.title = title;
  }

  public getTitle() {
    return this.title;
  }

  public setContent(content: string) {
    this.content = content;
  }

  public getContent() {
    return this.content;
  }

  public setList(list: string) {
    this.list = list;
  }

  public getList() {
    return this.list;
  }
}

export default TodoCard;
