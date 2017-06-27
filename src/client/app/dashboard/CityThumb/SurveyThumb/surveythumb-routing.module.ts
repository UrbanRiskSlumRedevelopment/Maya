import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyThumbComponent } from './surveythumb.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'surveythumb', component: SurveyThumbComponent }
    ])
  ],
  exports: [RouterModule]
})
export class SurveyThumbRoutingModule { }
