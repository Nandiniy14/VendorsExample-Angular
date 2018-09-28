import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  
  submitted = false;
  constructor(private vendorService : VendorService) { }

  ngOnInit() {
  }

  //Method to check if the user has enetered non zero values and then store the values in the model.
  onSubmit(vendorForm:NgForm){
    if(vendorForm.value.tasks <= 0 && vendorForm.value.vendors <= 0){
      alert("Please enter a value greater than zero");
      vendorForm.reset();
      this.submitted = false;

    } else if(vendorForm.value.tasks <= 0) {
      alert("Please enter number of tasks greater than zero");
      vendorForm.reset();
      this.submitted = false;

    }
     else if(vendorForm.value.vendors <= 0){
      alert("Please enter number of vendors greater than zero");
      vendorForm.reset();
      this.submitted = false;
    } 
    else {
      this.vendorService.onSubmit(vendorForm);
      this.submitted = true;

    }
    
    

  }
}
