import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from "@angular/router";
import { AppService } from '../app.service';
@Component({
  selector: 'app-create-folder',
  templateUrl: './create-folder.component.html',
  styleUrls: ['./create-folder.component.css'],
  providers:[]
})
export class CreateFolderComponent implements OnInit {

  constructor(public router:Router, private appService: AppService) { }
  name;
  ngOnInit() {

  }

  addFolder(){
    this.appService.set(this.name);
    this.router.navigateByUrl('');
    // this.messageEvent.emit(this.name);
  }

}
