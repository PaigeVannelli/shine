export interface IPost {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
  author: string;
  timestamp: number;
}

export interface IAllPosts {
  allPosts: Array<IPost>;
}

