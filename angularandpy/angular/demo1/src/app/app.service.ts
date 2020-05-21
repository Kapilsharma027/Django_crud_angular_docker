


import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NetworkService } from './shared/services/network.service';
import { methodType } from './shared/constant';
@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient,
    private networkService: NetworkService) {
}

getTabData(data) {
  //  return this.http.get('assets/data.json');
 return this.networkService.request(methodType.post, '/authors', data);
}
getjokes(){
  // return this.http.get('assets/data1.json');
  return this.networkService.request(methodType.get, '/jokes', null);
}
addjokes(data){
  // return this.http.get('assets/data1.json');
  return this.networkService.request(methodType.post, '/jokes', data);
}
deletejokes(id){
  // return this.http.get('assets/data1.json');
  return this.networkService.request(methodType.delete, '/jokes/' + id, null);
}
}

 