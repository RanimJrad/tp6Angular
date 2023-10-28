import { Component,OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';


@Component({
  selector: 'app-add-produits',
  templateUrl:'./add-produits.component.html' ,
  
})
export class AddProduitsComponent implements OnInit{
  newProduit= new Produit();
  categories! : Categorie[];
  newIdCat! : number; 
  newCategorie! : Categorie;
  
  constructor(private ProduitService : ProduitService ,
              private router :Router,){
  }
  ngOnInit() : void{
    this.categories = this.ProduitService.listeCategories();

    
  }
  addProduit(){
    //console.log(this.newIdCat);
    this.newCategorie = this.ProduitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.ProduitService.ajouterProduit(this.newProduit);
    this.router.navigate(['produits']);

  }
  

  
  
}
