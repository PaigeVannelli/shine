export interface IPost {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
}

export interface IAllPosts {
  allPosts: Array<IPost>;
}

