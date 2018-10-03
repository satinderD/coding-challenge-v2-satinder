export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostAction {
  payload: IPost;
  type: string;
}

export interface IComment {
  email: string;
  id: number;
  name: string;
  body: string;
}
