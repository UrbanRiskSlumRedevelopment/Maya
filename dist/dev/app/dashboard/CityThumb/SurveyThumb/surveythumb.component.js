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
var SurveyThumbComponent = (function () {
    function SurveyThumbComponent() {
        this.housingsurvey = [
            { id: 1, name: 'Sector 2' },
            { id: 2, name: 'Belapur' },
            { id: 3, name: 'Sector 22' },
            { id: 4, name: 'Hamirpur' },
            { id: 5, name: 'Bilaspur' },
            { id: 6, name: 'Cantonment' },
            { id: 7, name: 'Annasalai' },
            { id: 8, name: 'Chiragnagar' },
            { id: 9, name: 'Dharavi' },
            { id: 10, name: 'Sector 34' }
        ];
    }
    return SurveyThumbComponent;
}());
SurveyThumbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'survey-thumb',
        templateUrl: 'surveythumb.component.html',
        styleUrls: ['surveythumb.component.css']
    }),
    __metadata("design:paramtypes", [])
], SurveyThumbComponent);
exports.SurveyThumbComponent = SurveyThumbComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEwQztBQWExQyxJQUFhLG9CQUFvQjtJQUcvQjtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUc7WUFDbEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDeEIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDekIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUM7WUFDM0IsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDMUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUM7WUFDNUIsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDeEIsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7U0FDNUIsQ0FBQztJQUNKLENBQUM7SUFDSCwyQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFqQlksb0JBQW9CO0lBUmhDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztLQUN6QyxDQUFDOztHQUdXLG9CQUFvQixDQWlCaEM7QUFqQlksb0RBQW9CIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qbGF6eSBsb2FkZWQqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzdXJ2ZXktdGh1bWInLFxuICB0ZW1wbGF0ZVVybDogJ3N1cnZleXRodW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N1cnZleXRodW1iLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3VydmV5VGh1bWJDb21wb25lbnQge1xuXG4gIGhvdXNpbmdzdXJ2ZXk6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICB0aGlzLmhvdXNpbmdzdXJ2ZXkgPSBbXG4gICAgICB7aWQ6IDEsIG5hbWU6ICdTZWN0b3IgMid9LFxuICAgICAge2lkOiAyLCBuYW1lOiAnQmVsYXB1cid9LFxuICAgICAge2lkOiAzLCBuYW1lOiAnU2VjdG9yIDIyJ30sXG4gICAgICB7aWQ6IDQsIG5hbWU6ICdIYW1pcnB1cid9LFxuICAgICAge2lkOiA1LCBuYW1lOiAnQmlsYXNwdXInfSxcbiAgICAgIHtpZDogNiwgbmFtZTogJ0NhbnRvbm1lbnQnfSxcbiAgICAgIHtpZDogNywgbmFtZTogJ0FubmFzYWxhaSd9LFxuICAgICAge2lkOiA4LCBuYW1lOiAnQ2hpcmFnbmFnYXInfSxcbiAgICAgIHtpZDogOSwgbmFtZTogJ0RoYXJhdmknfSxcbiAgICAgIHtpZDogMTAsIG5hbWU6ICdTZWN0b3IgMzQnfVxuICAgIF07XG4gIH1cbn1cbiJdfQ==
