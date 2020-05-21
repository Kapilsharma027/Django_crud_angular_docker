

import { Component } from '@angular/core';
import { AppService } from './app.service';
import { PaginateOptions, PageState } from 'ngx-paginate';
import { Observable } from 'rxjs';
import { PageRequestModel } from './shared/pagerequestmodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data:  Observable<string[]>;
  pageIndex: number;
  last = 10;
  first = 0;

  Entries = [5, 10, 15, 20];
  p = 1;
  dataCount: 100;
  // config: any;
  pagesize = 10;
  selected = 10;
  currentChange;
  textToShow: string;
  pageRequestModel: PageRequestModel;
  config = {
    itemsPerPage: this.pagesize,
    currentPage: 1 ,
    totalItems: this.dataCount
  };
  /**
   * @param  {AppService} privateappService
   */
  constructor(private appService: AppService
  ) {
    // this.getAuthorData();
  }

  /**
   * @param  {any} data data
   */
  setPageSize(pageSize: any) {
    console.log('console on setPage change', pageSize);
this.pagesize = pageSize;
    this.getAuthorData();
  }
// change comments
  change(eve: any) {
    console.log(eve);
    this.config.currentPage = eve;
    this.getAuthorData();
  }

  getAuthorData( ) {
this.pageRequestModel = new PageRequestModel();
this.pageRequestModel.pagenumber = this.config.currentPage;
this.pageRequestModel.pagesize = this.pagesize;

    this.appService.getTabData(this.pageRequestModel).subscribe(data => {
      console.log(data);
      this.data = data['data'];
      this.dataCount = data['totalCount'];
      this.config.itemsPerPage = this.pagesize;
      this.config.totalItems = this.dataCount;
    },
      error => {
        console.log('error in tab data', error);
      });
  }
  goToFirst() {
    this.config.currentPage = 1;
    this.getAuthorData();
  }
  goToLast() {
    const rem = Math.floor(this.dataCount % this.pagesize);
    this.config.currentPage = Math.floor(this.dataCount / this.pagesize);
    if (rem) {
      this.config.currentPage++;
    }
    this.getAuthorData();
  }
//   config: any;
//   collection = { count: 20, data: [] };
//   constructor() {
//  this.getdata(10);
//     this.config = {
//       itemsPerPage: 10,
//       currentPage: 1,
//       totalItems: 100
//     };
//   }

//   pageChanged(event){
//     this.config.currentPage = event;
//   }

//   change(){
//     this.config.itemsPerPage = 5;
//     this.getdata(5);
//   }

//   change1(){
//     this.config.itemsPerPage = 10;
//     this.getdata(10);
//   }

//   getdata(num){
//     this.collection.data = [];
//       for (var i = 0; i < num; i++) {
//       this.collection.data.push(
//         {
//           id: i + 1,
//           value: "items number " + (i + 1)
//         }
//       );
//     }
//   }
}
