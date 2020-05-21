import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';
import { ResponseEntity } from '../reponseEntity.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { methodType } from '../constant';
import { BaseURL } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private httpClient: HttpClient,
     ) { }

  /*
* This function makes an api call to post user login credentials.
* */
  public authentication(endPoint: string, data: any): Observable<ResponseEntity> {

    const userdetail = JSON.parse(JSON.stringify(data));
    // userdetail['password'] = window.btoa(data['password']);
    return this.httpClient.post<any>(BaseURL + endPoint, userdetail, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    })
      .pipe(
        tap(
        ),
        catchError((error: any) => {
          return throwError(error);
        }
        )
      );
  }

  public request(typeOfMethod: methodType,
    endPoint: string,
    data: any,
  ): Observable<ResponseEntity> {
    if (typeOfMethod === 'POST') {
       return this.postRequest(endPoint, data);
    } else if (typeOfMethod === 'GET') {
      return this.getRequest(endPoint);
    }

    if (typeOfMethod === 'DELETE') {
    return this.deleteRequest(endPoint);
    }
  }

  /**
    * This method makes an get request to the server.
    * @param url Url To append
    */
  private getRequest(endPoint: string): Observable<ResponseEntity> {
    const strBaseUrl: string = BaseURL;
    return this.httpClient.get<any>(BaseURL + endPoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    })
      .pipe(
        tap(
          data => {
            // if ( showLoader ) {
            // this.loader.displayLoader(false);
            // }
          }
        ),
        catchError((error: any) => {
          return throwError(error);
        }
        )
      );
  }

  private postRequest(endPoint: string, providerData: string): Observable<ResponseEntity> {
    // let header;
    // if (this.storageService.read('userToken')) {
    //   header = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer ' + this.storageService.read('userToken')
    //   })
    // } else {
    //   header = new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }

    return this.httpClient.post<any>(BaseURL + endPoint, providerData)
      .pipe(
        tap(
          data => {
            // this.loader.displayLoader(false);
            console.log('success');
          }
        ),
        catchError((error: any) => {
          // this.loader.displayLoader(false);
          console.log(error);
          return throwError(error);
        }
        )
      );
  }
  private deleteRequest(endPoint: string): Observable<ResponseEntity> {
    return this.httpClient.delete<any>(BaseURL + endPoint, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
      .pipe(
        tap(
          data => {
            console.log('success');
          }
        ),
        catchError((error: any) => {
            return throwError(error);
          }
        )
      );
  }
  // getWithoutAuthentication(endPoint: string): Observable<ResponseEntity> {
  //   return this.httpClient.get<any>(BaseURL + endPoint, {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     })
  //   })
  //     .pipe(
  //       tap(
  //         data => {
  //           console.log('success');
  //         }
  //       ),
  //       catchError((error: any) => {
  //         return throwError(error);
  //       }
  //       )
  //     );
  // }
}
