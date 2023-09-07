import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blogger } from 'src/app/shared/models/blogger';

@Component({
  selector: 'app-add-blogger',
  templateUrl: './add-blogger.component.html',
  styleUrls: ['./add-blogger.component.scss']
})
export class AddBloggerComponent {
  private router = inject(Router);
  private newBlogger: Blogger = new Blogger();
  private bloggers: Blogger[] = [];

  public formBloggerGroup: FormGroup = new FormGroup({
    nameControl: new FormControl('', Validators.required),
    websiteControl: new FormControl('', Validators.required),
    pictureUrlControl: new FormControl('', Validators.required),
    emailControl: new FormControl('', Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")),
  });

  cancel(): void {
    this.router.navigate(['']);
  }

  validator(): boolean {
    let isValid = true;
    if (this.formBloggerGroup.invalid) {
      isValid = false;
      this.formBloggerGroup.markAllAsTouched();
    }
    return isValid;
  }

  onSave() {
    if (!this.validator()) {
      return;
    }
    this.newBlogger = this.buildobject();
    this.bloggers.push(this.newBlogger);
    localStorage.setItem('bloggers', JSON.stringify(this.bloggers));
    this.router.navigate(['']);
  }

  buildobject(): Blogger {
    this.getBloggers();

    //We need the last Id
    let newId: number = 1;
    if (this.bloggers.length > 0) {
      newId = (Math.max(...this.bloggers.map(u => u.id))) + 1;
    }

    let tmpBlogger: Blogger = {
      id: newId,
      name: this.formBloggerGroup.get('nameControl').value,
      website: this.formBloggerGroup.get('websiteControl').value,
      picture_url: this.formBloggerGroup.get('pictureUrlControl').value,
      email: this.formBloggerGroup.get('emailControl').value
    };
    return tmpBlogger;
  }

  getBloggers() {
    this.bloggers = JSON.parse(localStorage.getItem('bloggers'));
    if (this.bloggers == null || this.bloggers == undefined) {
      this.bloggers = [];
    }
  }

}
