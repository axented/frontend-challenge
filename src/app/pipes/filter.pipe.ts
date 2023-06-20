import { Pipe, PipeTransform } from '@angular/core';

import { Blogger } from '../models/blogger.model';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(
    bloggers: Blogger[],
    filterString: string,
    properties: string[],
  ): Blogger[] {
    if (bloggers.length === 0 || !filterString) {
      return bloggers;
    }

    let filteredUsers: Blogger[] = [];

    for (let blogger of bloggers) {
      let check = false;

      for (let property of properties) {
        check =
          check ||
          (blogger[property as keyof Blogger] as string)
            .toLowerCase()
            .includes(filterString.toLowerCase());
      }

      if (check) filteredUsers.push(blogger);
    }
    return filteredUsers;
  }
}
