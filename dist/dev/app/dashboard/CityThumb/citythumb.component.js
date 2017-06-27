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
    CityThumbComponent.prototype.opensurvey = function () {
        console.log("success");
    };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL2NpdHl0aHVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFhekMsSUFBYSxrQkFBa0I7SUFHM0I7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2YsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDeEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDM0IsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7U0FDM0IsQ0FBQztJQUNKLENBQUM7SUFFRix1Q0FBVSxHQUFWO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBRSxTQUFTLENBQUMsQ0FBQztJQUUxQixDQUFDO0lBRUYseUJBQUM7QUFBRCxDQW5CRixBQW1CRyxJQUFBO0FBbkJVLGtCQUFrQjtJQVA5QixnQkFBUyxDQUFFO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FDdkMsQ0FBQzs7R0FFVyxrQkFBa0IsQ0FtQjVCO0FBbkJVLGdEQUFrQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9jaXR5dGh1bWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1cnZleVRodW1iQ29tcG9uZW50fSBmcm9tICcuL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdXJ2ZXlEYXRhQ29tcG9uZW50fSBmcm9tICcuL1N1cnZleURhdGEvc3VydmV5ZGF0YS5jb21wb25lbnQnO1xuXG4vKiBMYXp5IGxvYWRlZCovXG5cbkBDb21wb25lbnQgKHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjaXR5dGh1bWInLFxuICB0ZW1wbGF0ZVVybDogJ2NpdHl0aHVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaXR5dGh1bWIuY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgQ2l0eVRodW1iQ29tcG9uZW50IHtcbiAgICBjaXR5bmFtZXM6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNpdHluYW1lcyA9IFtcbiAgICAgICAge2lkOiAxLCBuYW1lOiAnQWxsYWhhYmFkJ30sXG4gICAgICAgIHtpZDogMiwgbmFtZTogJ0JoYWdhbHB1cid9LFxuICAgICAgICB7aWQ6IDMsIG5hbWU6ICdDaGVubmFpJ30sXG4gICAgICAgIHtpZDogNCwgbmFtZTogJ0RlaGVyYWh1bid9LFxuICAgICAgICB7aWQ6IDUsIG5hbWU6ICdFZXJuYWt1bGFtJ30sXG4gICAgICAgIHtpZDogNiwgbmFtZTogJ0Zpcm96YWJhZCd9XG4gICAgICBdO1xuICAgIH1cblxuICAgb3BlbnN1cnZleSgpIHtcbiAgICAgY29uc29sZS5sb2cgKFwic3VjY2Vzc1wiKTtcblxuICAgfVxuXG4gIH1cbiJdfQ==
