import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { AppService } from '../app.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers:[AppService]
})
export class HomePageComponent implements OnInit {

  constructor(public AppService:AppService) { }
 
  ngOnInit() {
    
  }

}
