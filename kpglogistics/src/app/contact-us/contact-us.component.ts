import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit() {
  }
  submitForm (){
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    if(name == '' && phone == ''){
      alert("Please Enter Name and Contact Number");
    } else if(name == '' && phone !== '') {
      alert("Please Enter Name")
    }else if(name !== '' && phone == '') {
      alert("Please Enter Contact Number");
    }
    else{
      alert("You have Succeessfully save your data. \n We will contact you soon.");
    }
    }
    
    //
    //[routerLink]="['/home']" routerLinkActive="active" ;
   // this._router.navigateByUrl('/user');
   //this.location.back();
  }

