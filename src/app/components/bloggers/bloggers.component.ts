import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Blogger } from 'src/app/models/blogger.model';
import { BloggersService } from 'src/app/services/bloggers.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bloggers',
  templateUrl: './bloggers.component.html',
  styleUrls: ['./bloggers.component.scss']
})
export class BloggersComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<void> = new Subject<void>();
  private _idBloggerEdit?: string;

  public tempData: Blogger[] = [];
  bloggers: Blogger[] = [];
  blogger: Blogger = {
    id: '',
    name: '',
    website: '',
    picture_url: '',
    email: '',
    friends: []
  };
  public showProductDetail = false
  public myForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _bloggerService: BloggersService) { }

  private _createForm(): void {
    this.myForm = this._fb.group({
      name: ['', Validators.required],
      website: ['', Validators.required],
      picture_url: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      friends: [''],
    })
  }

  private async _saveNewBlogger() {
    const response = await this._bloggerService.addBlogger(this.myForm.value);
    this._swalSuccess('Success', 'Blogger has been saved');
  }

  private async _saveEditBlogger(id: string) {
    const response = await this._bloggerService.updateBlogger(id, this.myForm.value);
    this._swalSuccess('Success', 'Blogger has been updated');
  }

  private async _deleteItem(id: string) {
    const response = await this._bloggerService.deleteBlogger(id);
  }

  private _getBloggers() {
    const { _bloggerService, _unsubscribeAll } = this;

    _bloggerService
    .getBloggers()
    .pipe(takeUntil(_unsubscribeAll))
    .subscribe((data) => {
      this.bloggers = data;
      this.tempData = data;
    })
  }

  private _swalSuccess(swalSuccessfulTitle: string, swalSuccessfulText: string): void {
    Swal.fire({
      icon: 'success',
      title: swalSuccessfulTitle,
      text: swalSuccessfulText,
      confirmButtonColor: '#228B22',
      customClass: {
        confirmButton: 'btn btn-success'
      }
    });
  }

  ngOnInit(): void {
    this._createForm();
    this._getBloggers();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(blogger: Blogger) {
    this._createForm();
    this._idBloggerEdit = blogger.id;
    this.myForm.patchValue(blogger);
    this.toggleProductDetail();
  }

  onDeleteBlogger(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E42728',
      cancelButtonColor: '#CECECE',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((result) => {
      if (result.value) {
        this._deleteItem(id);
        this._swalSuccess('Success', 'Blogger has been deleted');
      }
    });
  }

  addBlogger() {
    this._createForm();
    this.toggleProductDetail();
    this._idBloggerEdit = '';
  }

  myFormOnSubmit() {
    // stop here if form is invalid
    if (this.myForm.invalid) {
      return;
    }

    if (this._idBloggerEdit) {
      this._saveEditBlogger(this._idBloggerEdit);
    } else {
      this._saveNewBlogger();
    }
    
    this.toggleProductDetail();
  }

  filterUpdate(event: any) {
    const val = event.target.value.toLowerCase();
    
    const temp = this.tempData.filter(function (d) {
      return (
        d.name.toLowerCase().indexOf(val) !== -1 ||
        d.website.toLowerCase().indexOf(val) !== -1 ||
        !val
      );
    });

    this.bloggers = temp;
  }
}