import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersProvider {
  private API_URL = 'https://marketled.herokuapp.com/produtos';
  constructor(public http: HttpClient) {}

    getAll(nomeProd : string, tipoProd: string){
      return new Promise((resolve,reject) => {
        let url = this.API_URL;
        this.http.get(url)
        .subscribe((result:any) =>{
          resolve(result.json());
        },
        (error) =>{
          reject(error.json());
        })
      })
    }
  

}
