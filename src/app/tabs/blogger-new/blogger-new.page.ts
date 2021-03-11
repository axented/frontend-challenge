import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BloggerService } from 'src/app/services/blogger.service';

@Component({
  selector: 'app-blogger-new',
  templateUrl: './blogger-new.page.html',
  styleUrls: ['./blogger-new.page.scss'],
})
export class BloggerNewPage implements OnInit {

  public AddBloggerForm;

  constructor(
    private fb: FormBuilder,
    private bloggerService: BloggerService
  ) { }

  ngOnInit() {

    this.AddBloggerForm = this.createBloggerForm();
  }


  createBloggerForm() {

    return this.fb.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Website: ['', Validators.required],
      Picture: '',
    });
  }

  saveBlogger() {

    if (this.AddBloggerForm.valid) {

      this.bloggerService.postNewBlogger(this.AddBloggerForm.value)
        .toPromise().then(response => alert( 'Blogger registrado correctamente' )).catch(err => console.log(err))

      const data = {
        Name: '',
        Email: '',
        Website: '',
        Picture: ''
      }

      this.AddBloggerForm.setValue(data)

    }



  }

}
