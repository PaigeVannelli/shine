export interface IPost {
  pid?: number;
  uid?: number;
  title: string;
  content: string;
  author: string;
  timestamp?: any;
  key?: any;
  replies?: Array<IReply>;
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

export interface ICurrentPost {
  pid: number;
  uid: number;
  author: string;
  timestamp: number;
  title: string;
  content: string;
  comments: Array<IReply | undefined>
  replies: Array<IReply>
}
