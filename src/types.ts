export interface IPost {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
  author: string;
  timestamp: string;
}

export interface IAllPosts {
  allPosts: Array<IPost>;
}

