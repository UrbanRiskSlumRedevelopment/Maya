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
        this.getSurvey = new core_1.EventEmitter();
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
    SurveyThumbComponent.prototype.surveyClicked = function (item) {
        this.getSurvey.emit(item);
    };
    return SurveyThumbComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], SurveyThumbComponent.prototype, "getSurvey", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL1N1cnZleVRodW1iL3N1cnZleXRodW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUF1RTtBQWF2RSxJQUFhLG9CQUFvQjtJQU8vQjtRQUhVLGNBQVMsR0FBc0IsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJM0QsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNsQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUN4QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUM1QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUN4QixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUdELDRDQUFhLEdBQWIsVUFBYyxJQUFJO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFHSCwyQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUF4Qlc7SUFBVCxhQUFNLEVBQUU7OEJBQVksbUJBQVk7dURBQTJCO0FBSmpELG9CQUFvQjtJQVJoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7S0FDekMsQ0FBQzs7R0FHVyxvQkFBb0IsQ0E0QmhDO0FBNUJZLG9EQUFvQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9TdXJ2ZXlUaHVtYi9zdXJ2ZXl0aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dCwgT3V0cHV0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbi8qbGF6eSBsb2FkZWQqL1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdzdXJ2ZXktdGh1bWInLFxuICB0ZW1wbGF0ZVVybDogJ3N1cnZleXRodW1iLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3N1cnZleXRodW1iLmNvbXBvbmVudC5jc3MnXVxufSlcblxuXG5leHBvcnQgY2xhc3MgU3VydmV5VGh1bWJDb21wb25lbnQge1xuXG5cbiAgaG91c2luZ3N1cnZleTogYW55O1xuICBAT3V0cHV0KCkgZ2V0U3VydmV5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgdGhpcy5ob3VzaW5nc3VydmV5ID0gW1xuICAgICAge2lkOiAxLCBuYW1lOiAnU2VjdG9yIDInfSxcbiAgICAgIHtpZDogMiwgbmFtZTogJ0JlbGFwdXInfSxcbiAgICAgIHtpZDogMywgbmFtZTogJ1NlY3RvciAyMid9LFxuICAgICAge2lkOiA0LCBuYW1lOiAnSGFtaXJwdXInfSxcbiAgICAgIHtpZDogNSwgbmFtZTogJ0JpbGFzcHVyJ30sXG4gICAgICB7aWQ6IDYsIG5hbWU6ICdDYW50b25tZW50J30sXG4gICAgICB7aWQ6IDcsIG5hbWU6ICdBbm5hc2FsYWknfSxcbiAgICAgIHtpZDogOCwgbmFtZTogJ0NoaXJhZ25hZ2FyJ30sXG4gICAgICB7aWQ6IDksIG5hbWU6ICdEaGFyYXZpJ30sXG4gICAgICB7aWQ6IDEwLCBuYW1lOiAnU2VjdG9yIDM0J31cbiAgICBdO1xuICB9XG5cblxuICBzdXJ2ZXlDbGlja2VkKGl0ZW0pIHtcbiAgICB0aGlzLmdldFN1cnZleS5lbWl0KGl0ZW0pO1xuICB9XG5cblxufVxuIl19
