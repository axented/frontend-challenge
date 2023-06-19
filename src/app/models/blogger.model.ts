export interface Blogger extends BloggerData {
  id: string;
  friends: string[];
}

export interface BloggerData {
  name: string;
  website: string;
  picture_url: string;
  email: string;
}
