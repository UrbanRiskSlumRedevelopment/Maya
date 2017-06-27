import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SurveyThumbComponent} from './CityThumb/SurveyThumb/surveythumb.component';
import { CityThumbComponent} from './CityThumb/citythumb.component';


@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, SurveyThumbComponent, CityThumbComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }
