import { Component } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
export interface Fruit {
  name: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularMatcourse';
  fruits: Fruit[] = [{name: ''}];
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }



  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);
  
    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}


