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
   totalPrice;
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("productsData") != null)
    {
       this.localProducts =JSON.parse(localStorage.getItem("productsData"));

      // console.log(this.localProducts[1])
      for(let i = 0 ; i < this.localProducts.length ; i++)
      {
        console.log(this.localProducts.description)
      }
    }
  }
  plusQuan()
  {
    if(this.inc != 20)
    {
      this.inc++ ;
      this.quantity = this.inc;

    }
  }
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
  deleteItem(proInfo)
  {
     let indexDeleted = proInfo.id;
     let deletedItem = this.localProducts.slice(indexDeleted , 1);
     this.localProducts.push()
     localStorage.setItem("productsData" , JSON.stringify(this.localProducts));
     console.log(deletedItem);


  }


}
