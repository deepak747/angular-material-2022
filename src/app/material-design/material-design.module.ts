import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // MatButtonModule,
    // MatCardModule,
  ],
     exports:[MatButtonModule,
      MatCardModule,
      MatToolbarModule,
      MatInputModule,
      MatFormFieldModule,
      MatDividerModule,
      MatProgressSpinnerModule,
      MatGridListModule,
      MatChipsModule,
      MatBadgeModule,
      MatIconModule,
      MatMenuModule,
      MatProgressBarModule,
      MatStepperModule
    ]
})
export class MaterialDesignModule { }
