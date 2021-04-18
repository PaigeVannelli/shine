export interface IPost {
  pid?: number;
  uid?: number;
  title?: string;
  content?: string;
  author?: string;
  timestamp?: any;
  // date?: string;
}

export interface IReply {
  key: number,
  author: string,
  timestamp: number,
  body: string,
  cid: string,
  uid: number,
}

export interface IAllPosts {
  allPosts: Array<IPost>;
}

