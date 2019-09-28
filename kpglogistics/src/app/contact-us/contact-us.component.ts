import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  constructor(private location : Location) { }
  public name:HTMLInputElement;
  ngOnInit() {
  }
  submitForm (){
    var name =(<HTMLInputElement>document.getElementById("name")).value; 
    var phone = (<HTMLInputElement>document.getElementById("phone")).value;

    if(name == '' && phone == ''){
      alert("Please Enter Name and Contact Number");
    } else if(name == '' && phone !== '') {
      alert("Please Enter Name")
    }else if(name !== '' && phone == '') {
      alert("Please Enter Contact Number");
    }
    else{
      alert("Thank You Yo Contact Us. \n We will reach you soon.");
    }
    }
  
  }

