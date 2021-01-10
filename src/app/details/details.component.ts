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
//  detailsHolder = [] ;
//  isLoaded = false ;
productsArr ; //local array
newObj
  constructor(_ActivatedRoute :ActivatedRoute , _ProductserviceService:ProductserviceService) {
   this.index = _ActivatedRoute.snapshot.paramMap.get("id"); //get the id
  //  window.alert(this.index);
  _ProductserviceService.getAllProducts().subscribe((data)=>{
    this.productDetails = data[this.index];
    // this.isLoaded = true ;
  });

  }
  // addCard(prodDetails)
  // {
  //     //console.log(prodDetails) //hold obj that will pushed in arr
  //     // let holder = prodDetails;
  //     if(localStorage.getItem("productsData") != null)
  //      {
  //         //  this.productDetails = [];
  //          this.detailsHolder.push(prodDetails);
  //          this.detailsHolder =JSON.parse(localStorage.getItem("productsData"));
  //      }
  // }
  addCard(proData) //kda gbt l id bta3 l 3onsor
  {

     this.newObj = proData ;



      if(localStorage.getItem("productsData") == null)
      {
        this.productsArr = [];
        this.productsArr.push(proData);
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));

      }
      else
      {
        this.productsArr.push(proData)
        localStorage.setItem("productsData" , JSON.stringify(this.productsArr));
      }


    }
  ngOnInit() {
  }

}
