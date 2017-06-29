import { Input, Output, Component, EventEmitter} from '@angular/core';

/* Lazy loaded*/

@Component ({
  moduleId: module.id,
  selector: 'citythumb',
  templateUrl: 'citythumb.component.html',
  styleUrls: ['citythumb.component.css'],

})

export class CityThumbComponent {
    citynames: any[];
    @Input() thumb: any;
    @Output() getCity: EventEmitter<any> = new EventEmitter();

    constructor() {
      this.citynames = [
        {id: 1, name: 'Allahabad'},
        {id: 2, name: 'Bhagalpur'},
        {id: 3, name: 'Chennai'},
        {id: 4, name: 'Deherahun'},
        {id: 5, name: 'Eernakulam'},
        {id: 6, name: 'Firozabad'}
      ];
    }

    cityClicked(cityname) {
      this.getCity.emit(cityname);
    }


  }
