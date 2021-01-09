import { Component, OnInit } from '@angular/core';
import{ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  btn = `<a class="btn btn-danger m-auto ">
  <i class="fas fa-minus mr-2 "></i>
   <i class="fas fa-plus"></i>
  </a>`;
   allPrdoucts  = [];
   term:string;  //for search
   allItems = [] ;
   productsArr ; //local array
   newObj
   isLoaded = false ;
  constructor(public _ProductserviceService : ProductserviceService)
   {   //display data;
    _ProductserviceService.getAllProducts().subscribe( (allData) => {
     this.allPrdoucts = allData ;
     this.isLoaded = true ;
    //  console.log(this.allPrdoucts)
    })
  }

  getData(proData) //kda gbt l id bta3 l 3onsor
  {
    //to get data from localstorage and count on it ::
    // let allLocalData = localStorage.getItem("productsData");

        //this.productsArr.push(proData)
     this.newObj = proData ;

      //  this.allItems = JSON.parse(localStorage.getItem("productsData"));
      // if()
      // {
      //   this.allItems.push(proData);
      //   localStorage.setItem("productsData" , JSON.stringify(this.allItems));
      // }
      // else
      // {
      //   localStorage.setItem("productsData" , JSON.stringify(this.allItems));

      // }

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


    /************************** */



  ngOnInit() {

  }

}
