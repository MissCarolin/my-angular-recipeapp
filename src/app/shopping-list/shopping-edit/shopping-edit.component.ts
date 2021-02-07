import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @Input() ingredient: Ingredient;
 @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
 @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddItem() {
  //kürzer:
  //  const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value);
   const ingName = this.nameInputRef.nativeElement.value;
   const ingAmount = this.amountInputRef.nativeElement.value;
   const newIngredient = new Ingredient(ingName, ingAmount); //create new Ingredient with new Data
   this.shoppingListService.addIngredient(newIngredient);
  }

}
