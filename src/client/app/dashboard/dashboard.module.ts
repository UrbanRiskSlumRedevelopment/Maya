import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveyThumbComponent} from './SurveyThumb/surveythumb.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, SurveyThumbComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
