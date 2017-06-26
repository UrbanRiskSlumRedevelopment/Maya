"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CityThumbComponent = (function () {
    function CityThumbComponent() {
        this.citynames = [
            { id: 1, name: 'Allahabad' },
            { id: 2, name: 'Bhagalpur' },
            { id: 3, name: 'Chennai' },
            { id: 4, name: 'Deherahun' },
            { id: 5, name: 'Eernakulam' },
            { id: 6, name: 'Firozabad' }
        ];
    }
    return CityThumbComponent;
}());
CityThumbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'citythumb',
        templateUrl: 'citythumb.component.html',
        styleUrls: ['citythumb.component.css']
    }),
    __metadata("design:paramtypes", [])
], CityThumbComponent);
exports.CityThumbComponent = CityThumbComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL2NpdHl0aHVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFXekMsSUFBYSxrQkFBa0I7SUFHM0I7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDeEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDM0IsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7U0FDM0IsQ0FBQztJQUNKLENBQUM7SUFDSCx5QkFBQztBQUFELENBYkYsQUFhRyxJQUFBO0FBYlUsa0JBQWtCO0lBUDlCLGdCQUFTLENBQUU7UUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztLQUN2QyxDQUFDOztHQUVXLGtCQUFrQixDQWE1QjtBQWJVLGdEQUFrQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9jaXR5dGh1bWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyogTGF6eSBsb2FkZWQqL1xuXG5AQ29tcG9uZW50ICh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnY2l0eXRodW1iJyxcbiAgdGVtcGxhdGVVcmw6ICdjaXR5dGh1bWIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2l0eXRodW1iLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIENpdHlUaHVtYkNvbXBvbmVudCB7XG4gICAgY2l0eW5hbWVzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgdGhpcy5jaXR5bmFtZXMgPSBbXG4gICAgICAgIHtpZDogMSwgbmFtZTogJ0FsbGFoYWJhZCd9LFxuICAgICAgICB7aWQ6IDIsIG5hbWU6ICdCaGFnYWxwdXInfSxcbiAgICAgICAge2lkOiAzLCBuYW1lOiAnQ2hlbm5haSd9LFxuICAgICAgICB7aWQ6IDQsIG5hbWU6ICdEZWhlcmFodW4nfSxcbiAgICAgICAge2lkOiA1LCBuYW1lOiAnRWVybmFrdWxhbSd9LFxuICAgICAgICB7aWQ6IDYsIG5hbWU6ICdGaXJvemFiYWQnfVxuICAgICAgXTtcbiAgICB9XG4gIH1cbiJdfQ==
