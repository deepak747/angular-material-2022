import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-blogdetails',
  templateUrl: './blogdetails.component.html',
  styleUrls: ['./blogdetails.component.css']
})
export class BlogdetailsComponent implements OnInit {
  
  isEditable = false;
  _formBuilder: any;
  firstFormGroup:any;
  secondFormGroup:any;
  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required],
    });
     this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

}
