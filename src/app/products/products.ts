import {Component, OnInit} from '@angular/core';
import {NgClass} from '@angular/common';
import {ProductService} from '../services/products/product';


@Component({
  selector: 'app-products',
  imports: [
    NgClass,

  ],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  products: any = [];


  //souvent pour l'injection
  constructor( private productService: ProductService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts():void{
   // this.products = this.productService.getAllProducts();

    this.productService.getAllProducts().subscribe(
      {
        next: res => {
          this.products = res;
        },
        error: err => {
          console.log("error get products: "+err);
        }
      }
    );
  }

  handleDeleteProduct(id:any):void{
      //console.log("pr delete with id ", id);
    let v = confirm("êtes vous sûr de vouloir supprimer produit avec l'id : "+id+" ?");
    if(v){
      //this.productService.deleteProduct(id); this.getAllProducts();
      this.productService.deleteProduct(id).subscribe({
        next:res =>{
          this.getAllProducts();
        },
        error:err =>{
          console.log("error delete products: "+err);

        }
      })
    }
  }





  handleSelectOrDeselect(id:any):void{
      this.productService.handleSelectOrDeselect(id).subscribe({
        next:res=> {
          this.getAllProducts();
        },
        error: err =>{
          console.log("error select or deselect product ",err);
        }
      });
  }
}
