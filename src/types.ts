export interface IPosts {
  pid: number;
  uid: number;
  title: string;
  content: string;
}

export interface IAppState {
  allPosts: Array<IPosts>;
  error: string;
}
