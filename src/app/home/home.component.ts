import { Component, OnInit } from '@angular/core';
import{ProductserviceService} from '../productservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   allPrdoucts  = [];
   term:string;
  constructor(public _ProductserviceService : ProductserviceService)
   {
    _ProductserviceService.getAllProducts().subscribe( (allData) => {
     this.allPrdoucts = allData ;
    //  console.log(this.allPrdoucts)
    })
  }
  getData(i) //kda gbt l id bta3 l 3onsor
  {
    console.log(i)
  }

  ngOnInit() {
  }

}
