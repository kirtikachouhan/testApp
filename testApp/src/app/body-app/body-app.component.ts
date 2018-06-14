import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AppService } from '../app.service';
@Component({
  selector: 'app-body-app',
  templateUrl: './body-app.component.html',
  styleUrls: ['./body-app.component.css'],
  providers:[]
})
export class BodyAppComponent implements OnInit {

  constructor(public route: ActivatedRoute, private appService: AppService) { }
  haveFolder:Boolean= false;
  allData=[{"name":"dir1", "subFolder":[{"name":"subdir1"}]}];
  subData=[];
  name="";
  newFolder:any;
  noFolderFoundMsg="No Folder Avaliable For Createing New Folder Click Create Button";
  ngOnInit() {
    if(this.allData.length){
      this.haveFolder = true;
    }
    if(this.appService.get()){
      this.name = this.appService.get();
      this.haveFolder = true;
      this.newFolder = {};
      this.newFolder["name"]=this.name;
      this.newFolder["subFolder"]=this.subData;
      this.allData.unshift(this.newFolder);
    }
  }

}
