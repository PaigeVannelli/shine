export interface IPost {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
  author?: string;
  timestamp?: number;
  date?: string;
}

export interface IAllPosts {
  allPosts: Array<IPost>;
}

