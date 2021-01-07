import { Component, OnInit } from '@angular/core';
import{ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   allPrdoucts  = [];
  //  OBJarr = {title:"ah,e" ,
  //           img:"ah,e" ,
  //           price: "223"  ,
  //            category : "lorem" ,
  //             desc : "loremlorem"};
   term:string;
   allItems = [] ;


  constructor(public _ProductserviceService : ProductserviceService)
   {
    _ProductserviceService.getAllProducts().subscribe( (allData) => {
     this.allPrdoucts = allData ;
    //  console.log(this.allPrdoucts)
    })
  }

  getData(proData) //kda gbt l id bta3 l 3onsor
  {
    //to get data from localstorage and count on it ::
    // let allLocalData = localStorage.getItem("productsData");
    if(localStorage.getItem("productsData") == null)
    {
       let productsArr:any = [];
         productsArr.push(proData)
    }
    else
    {
      // let idHolder = proData.id ;
      let indexHolder :number = -1 ;
       this.allItems = JSON.parse(localStorage.getItem("productsData"));
      if(indexHolder == -1)
      {
        this.allItems.push(proData);
        localStorage.setItem("productsData" , JSON.stringify(this.allItems));
      }
      else
      {
        localStorage.setItem("productsData" , JSON.stringify(this.allItems));

      }

      // for(let i = 0 ; i <  this.allItems.length ; i++)
      // {
      //   if(parseInt(idHolder) === parseInt(this.allItems[i].id))
      //   {
      //     this.allItems[i]
      //   }
      // }
      // this.productsArr = JSON.parse(localStorage.getItem("productsData"));
      // console.log(this.productsArr)
      // this.productsArr.push(proData)
      // localStorage.setItem('productsData' , JSON.stringify(this.productsArr))
    }
    // localStorage.setItem('productsData' , JSON.stringify(proData));

    // localStorage.setItem('productsData' , "hi")
    /************************** */

    //  console.log("donstexsist")
    // this.productsArr.push(this.OBJarr)
    // localStorage.setItem('productsData' , JSON.stringify(this.productsArr));
  }

  ngOnInit() {
    // if(localStorage.getItem("productsData") == null)
    // {
    //  this.productsArr = [];
    // //  console.log("donstexsist")
    // localStorage.setItem('productsData' , JSON.stringify(this.productsArr))
    // }
    // else
    // {
    //   // this.productsArr = JSON.parse(localStorage.getItem("productsData"));
    //   // console.log(this.productsArr) this.holder


    // }

  }

}
