import { Base } from "./base";

export class Blogger extends Base {
  name: string = '';
  website: string = '';
  picture_url: string = '';
  email?: string = '';
  friends?: number[] = [];
}