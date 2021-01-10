import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   localProducts ;
   quantity:number;
   inc = 0 ;
   totalPrice:number = 0;
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("productsData") != null)
    {
       this.localProducts =JSON.parse(localStorage.getItem("productsData"));
      // console.log(this.localProducts[1])
    }

  }
  //increase quantity till specific number
  plusQuan()
  {
    if(this.inc != 20)
    {
      this.inc++ ;
      this.quantity = this.inc;

    }
  }
  //decrease quantity
  minusQuan()
  {
        if(this.inc != 1)
        {
          this.inc-- ;
          this.quantity = this.inc;
        }
        if(this.inc < 0 )
        {
          this.inc = 1 ;
          this.quantity = this.inc;
        }
  }
  //delete specf item from local;
  deleteItem(proInfo)
  {
    //  let indexDeleted = proInfo.id;
     this.localProducts =JSON.parse(localStorage.getItem("productsData"));
     for(let i = 0; i < this.localProducts.length; i++)
     {
         if (this.localProducts[i]['id'] == proInfo.id) {
          this.localProducts.splice(i, 1);
          localStorage.setItem('productsData', JSON.stringify(this.localProducts));
        return true;
        }

     }
    //  let deletedItem = this.localProducts.slice(indexDeleted , 1);

    //  localStorage.setItem("productsData" , JSON.stringify(this.localProducts));
    //  this.localProducts = deletedItem;
     //console.log(deletedItem);
  }
  // remove(product) {
  //   this.proarr = JSON.parse(localStorage.getItem('productsData'));
  //   for (let item = 0; item < this.proarr.length; item++) {

  //       if (this.proarr[item]['id'] == product.id) {
  //         this.proarr.splice(item, 1);
  //         localStorage.setItem('productsData', JSON.stringify(this.proarr));
  //       return true;
  //       }

  //     }

  // }
  total()
  {
    //kda 3lshan agm3 all products in local bs msh
    for(let i = 0 ; i < this.localProducts.length ; i++)
    {
     // console.log(this.localProducts[i].price);
      this.totalPrice += this.localProducts[i].price;
    }
    return Math.round(this.totalPrice);

  }


}
