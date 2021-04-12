export interface IPosts {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
}

export interface IAllPosts {
  allPosts: Array<IPosts>;
}