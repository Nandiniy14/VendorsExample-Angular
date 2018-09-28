import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Vendor } from './vendor.model';


@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  submitted = false;
  vendors : Vendor;
  Arr = Array;
  form : NgForm;

  
  constructor() {
    this.vendors = new Vendor;
   }
  
   //Storing the values in the model and then rendering another component
  onSubmit(vendorForm : NgForm){
      this.vendors.TotalTasks = vendorForm.value.tasks;
      this.vendors.TotalVendors = vendorForm.value.vendors;
      console.log(this.vendors.TotalTasks);
      this.submitted = true;
    
  }
  
  //Returning the model object
  getVendors(){
    return this.vendors;
  }

  //Storing percentages of vendors in an array
  percentagesArray(addForm:NgForm){
    this.form=addForm;
     for (let entry in this.Arr ) {
       this.vendors.percentage.push(this.Arr[entry]);
    
      }
    console.log(this.vendors.percentage);
    
    }
    
}
