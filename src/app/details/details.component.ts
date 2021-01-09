import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductserviceService} from '../productservice.service';
//  ActivatedRoute it hold the active route;
//face problem eny haloop 3la l id mn tanyf kan http maybe better
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 index ;
 productDetails:any = {} ; //search . it run when initialize it
 detailsHolder ;
  constructor(_ActivatedRoute :ActivatedRoute , _ProductserviceService:ProductserviceService) {
   this.index = _ActivatedRoute.snapshot.paramMap.get("id"); //get the id
  //  window.alert(this.index);
  _ProductserviceService.getAllProducts().subscribe((data)=>{
    this.productDetails = data[this.index]
  });

  }
  addCard(prodDetails)
  {
      //console.log(prodDetails) //hold obj that will pushed in arr
      let holder = prodDetails;
      if(localStorage.getItem("productsData") != null)
       {
           this.productDetails = [];
           this.detailsHolder.push(holder);
           this.productDetails =JSON.parse(localStorage.getItem("productsData"));
       }
  }
  ngOnInit() {
  }

}
