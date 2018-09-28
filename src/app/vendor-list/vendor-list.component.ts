import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.model';
import { VendorService } from '../vendor.service';
import { NgForm } from '@angular/forms';
import { DynamicModel } from '../dynamic.model';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  NoOfVendors : Vendor;
  Arr = Array;
  sum : number = 0;
  submitted = false;
  percentage;
  sum_tasks:number=0;
  Tasks:number[]=[];
  max:number=0;
  temp:string;
  dynamicmodel:DynamicModel[]=[];
  models:DynamicModel;
  
  constructor(private vendorService : VendorService) {
    this.NoOfVendors = new Vendor;
    this.models = new DynamicModel;
    console.log(this.NoOfVendors);
    
   }
  
  ngOnInit() {
    this.NoOfVendors = this.vendorService.getVendors();
    console.log(this.NoOfVendors.TotalVendors);

  }

  //Method to return tasks per each vendor
  onAdd(Addform: NgForm){
  
    this.percentage = this.vendorService.percentagesArray(Addform);
    this.sum=0;
    this.submitted=true;
    this.percentage=Addform.value.percentage;
    console.log(this.percentage + "per");
    //Checking whether the sum of percentages is equal to hundred or not.
    for (let entry in this.Arr ) { 
      this.sum += this.Arr[entry];
      console.log(this.Arr[entry]);
    
    }
    if (this.sum==100){
      for (let index in this.Arr ) {
        if(this.max<this.Arr[index]){
          this.max=this.Arr[index];
          this.temp=index;
        }
        this.models.percentage_arr=this.Arr[index];
        this.models.tasks=Math.floor((this.Arr[index])*this.NoOfVendors.TotalTasks/100);
        this.dynamicmodel.push(this.models);
        console.log(this.models);
        this.models= new DynamicModel();
        this.Tasks.push(Math.floor((this.Arr[index])*this.NoOfVendors.TotalTasks/100));
      }
      //Total tasks of vendors
      for (let entry in this.Tasks) {
        this.sum_tasks += this.Tasks[entry];
      }
      if(this.sum_tasks==this.NoOfVendors.TotalVendors){
        console.log("All tasks are distributed");
      }
      // Adding remaining tasks to the person who has maximum percentage
      else{
        this.Tasks[this.temp]+=this.NoOfVendors.TotalTasks-this.sum_tasks;
        this.dynamicmodel[this.temp].tasks=Math.floor((this.Arr[this.temp])*this.NoOfVendors.TotalTasks/100) + (this.NoOfVendors.TotalTasks-this.sum_tasks);
        console.log(this.models);
      }
      // console.log(this.Tasks);
      
    }
    else{
      alert("Sum of all percentages should be equal to 100");
      Addform.reset();
      this.submitted=false;
    } 
  }
}



  

