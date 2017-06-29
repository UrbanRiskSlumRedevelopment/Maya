import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */

@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  thumb: any;


  constructor(){
    this.thumb = "cities";
  };

  OpenSurveyThumbs(city){
    this.thumb = "surveys";
    console.log(city.name);
  };

  OpenSurvey(item){
    console.log(item.name);
    this.thumb = "surveydata";
  }

}
