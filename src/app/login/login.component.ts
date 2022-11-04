import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
          isloading:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
         this.isloading=true;
         setTimeout(() => {
           this.router.navigate(['/']);
         }, 3000);
  }

}
