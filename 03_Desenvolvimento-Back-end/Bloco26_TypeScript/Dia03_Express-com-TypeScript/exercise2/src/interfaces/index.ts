export interface IPost {
  title: string;
  author: string;
  category: string;
  publicationDate: string;
}

export interface Post extends IPost {
  id: number;
}
