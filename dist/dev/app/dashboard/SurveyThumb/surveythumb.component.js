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
        this.surveyitems = [
            { id: 1, name: 'Sector 2', url: '#' },
            { id: 2, name: 'Belapur' },
            { id: 3, name: 'Sector 22' },
            { id: 4, name: 'Hamirpur' },
            { id: 5, name: 'Bilaspur' },
            { id: 6, name: 'Cantonment' },
            { id: 7, name: 'Annasalai' },
            { id: 8, name: 'Chiragnagar' },
            { id: 9, name: 'Dharavi' },
            { id: 10, name: 'Sector 34' },
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvU3VydmV5VGh1bWIvc3VydmV5dGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBZTFDLElBQWEsb0JBQW9CO0lBRS9CO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRztZQUNqQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUMsR0FBRyxFQUFDO1lBQ2xDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQ3hCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQzFCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQ3pCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQzNCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQzFCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFDO1lBQzVCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQ3hCLEVBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1NBRTVCLENBQUM7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLG9CQUFvQjtJQVZoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDekMsQ0FBQzs7R0FLVyxvQkFBb0IsQ0FpQmhDO0FBakJZLG9EQUFvQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qbGF6eSBsb2FkZWQqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzdXJ2ZXktdGh1bWInLFxuICB0ZW1wbGF0ZVVybDogJ3N1cnZleXRodW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N1cnZleXRodW1iLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleVRodW1iQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnN1cnZleWl0ZW1zID0gW1xuICAgICAge2lkOiAxLCBuYW1lOiAnU2VjdG9yIDInLCB1cmw6JyMnfSxcbiAgICAgIHtpZDogMiwgbmFtZTogJ0JlbGFwdXInfSxcbiAgICAgIHtpZDogMywgbmFtZTogJ1NlY3RvciAyMid9LFxuICAgICAge2lkOiA0LCBuYW1lOiAnSGFtaXJwdXInfSxcbiAgICAgIHtpZDogNSwgbmFtZTogJ0JpbGFzcHVyJ30sXG4gICAgICB7aWQ6IDYsIG5hbWU6ICdDYW50b25tZW50J30sXG4gICAgICB7aWQ6IDcsIG5hbWU6ICdBbm5hc2FsYWknfSxcbiAgICAgIHtpZDogOCwgbmFtZTogJ0NoaXJhZ25hZ2FyJ30sXG4gICAgICB7aWQ6IDksIG5hbWU6ICdEaGFyYXZpJ30sXG4gICAgICB7aWQ6IDEwLCBuYW1lOiAnU2VjdG9yIDM0J30sXG5cbiAgICBdO1xuICB9XG59XG4iXX0=
