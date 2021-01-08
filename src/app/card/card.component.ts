import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   localProducts ;
  constructor() { }

  ngOnInit() {

    if(localStorage.getItem("productsData") != null)
    {
       this.localProducts =JSON.parse(localStorage.getItem("productsData"));
      //  console.log(this.localProducts[1])
    }
  }

}
