import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SurveyDataComponent } from './surveydata.component';

@NgModule ({

  imports: [
    RouterModule.forRoot([
      {path: 'surveydata', component: SurveyDataComponent}
    ]),
  ],
  exports: [RouterModule]
})
export class SurveyDataRoutingModule {}
