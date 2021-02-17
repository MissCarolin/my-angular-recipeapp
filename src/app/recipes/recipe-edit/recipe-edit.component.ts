import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  //retrieve id from url
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          //check in which mode we are by checking if url has an id param present
          this.editMode = params['id'] != null;
          console.log(this.editMode)
        }
      );

  }

}
