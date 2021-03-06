import { Input, Output, Component, EventEmitter } from '@angular/core';


/*lazy loaded*/

@Component({
  moduleId: module.id,
  selector: 'survey-thumb',
  templateUrl: 'surveythumb.component.html',
  styleUrls: ['surveythumb.component.css']
})


export class SurveyThumbComponent {


  housingsurvey: any;
  @Output() getSurvey: EventEmitter<any> = new EventEmitter();


  constructor() {
   this.housingsurvey = [
      {id: 1, name: 'Sector 2'},
      {id: 2, name: 'Belapur'},
      {id: 3, name: 'Sector 22'},
      {id: 4, name: 'Hamirpur'},
      {id: 5, name: 'Bilaspur'},
      {id: 6, name: 'Cantonment'},
      {id: 7, name: 'Annasalai'},
      {id: 8, name: 'Chiragnagar'},
      {id: 9, name: 'Dharavi'},
      {id: 10, name: 'Sector 34'}
    ];
  }


  surveyClicked(item) {
    this.getSurvey.emit(item);
  }


}
