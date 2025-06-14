// @ts-ignore

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   apiUrl:string = "http://localhost:8083";
  //souvent pour l'injection de dépendances
  constructor(private http: HttpClient) {

  }

  getAllProducts(){
    return this.http.get(this.apiUrl+"/products");
  }

  deleteProduct(id:any){
 //   this.products = this.products.filter(value => value.id != id);
   return  this.http.delete(this.apiUrl+"/products/"+id);
  }





  handleSelectOrDeselect(id:any){
    return this.http.patch(this.apiUrl+"/product/"+id, {});
}
}
