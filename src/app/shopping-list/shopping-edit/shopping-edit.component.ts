import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
//using Forms
@ViewChild('f') signupForm: NgForm;
subscription: Subscription;
editMode = false;
editedItemIndex: number;
editedItem: Ingredient;

//using databinding + clickListener to add ingredient
//  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
//  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.signupForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
  //kürzer:
  //  const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value);
   const value = form.value;
   const newIngredient = new Ingredient(value.name, value.amount); //create new Ingredient with new Data
   if (this.editMode) {
    this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
   } else {
    this.shoppingListService.addIngredient(newIngredient);
   }
   this.editMode = false;
   this.signupForm.reset()
  }

  onClearForm(){
    this.signupForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredients(this.editedItemIndex);
    this.onClearForm();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
