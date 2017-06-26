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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvU3VydmV5VGh1bWIvc3VydmV5dGh1bWIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQTBDO0FBYTFDLElBQWEsb0JBQW9CO0lBRy9CO1FBQ0MsSUFBSSxDQUFDLGFBQWEsR0FBRztZQUNsQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUN4QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUN6QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUM1QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUN4QixFQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FqQkEsQUFpQkMsSUFBQTtBQWpCWSxvQkFBb0I7SUFSaEMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsY0FBYztRQUN4QixXQUFXLEVBQUUsNEJBQTRCO1FBQ3pDLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO0tBQ3pDLENBQUM7O0dBR1csb0JBQW9CLENBaUJoQztBQWpCWSxvREFBb0IiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9TdXJ2ZXlUaHVtYi9zdXJ2ZXl0aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG4vKmxhenkgbG9hZGVkKi9cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnc3VydmV5LXRodW1iJyxcbiAgdGVtcGxhdGVVcmw6ICdzdXJ2ZXl0aHVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzdXJ2ZXl0aHVtYi5jb21wb25lbnQuY3NzJ11cbn0pXG5cblxuZXhwb3J0IGNsYXNzIFN1cnZleVRodW1iQ29tcG9uZW50IHtcblxuICBob3VzaW5nc3VydmV5OiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgdGhpcy5ob3VzaW5nc3VydmV5ID0gW1xuICAgICAge2lkOiAxLCBuYW1lOiAnU2VjdG9yIDInfSxcbiAgICAgIHtpZDogMiwgbmFtZTogJ0JlbGFwdXInfSxcbiAgICAgIHtpZDogMywgbmFtZTogJ1NlY3RvciAyMid9LFxuICAgICAge2lkOiA0LCBuYW1lOiAnSGFtaXJwdXInfSxcbiAgICAgIHtpZDogNSwgbmFtZTogJ0JpbGFzcHVyJ30sXG4gICAgICB7aWQ6IDYsIG5hbWU6ICdDYW50b25tZW50J30sXG4gICAgICB7aWQ6IDcsIG5hbWU6ICdBbm5hc2FsYWknfSxcbiAgICAgIHtpZDogOCwgbmFtZTogJ0NoaXJhZ25hZ2FyJ30sXG4gICAgICB7aWQ6IDksIG5hbWU6ICdEaGFyYXZpJ30sXG4gICAgICB7aWQ6IDEwLCBuYW1lOiAnU2VjdG9yIDM0J31cbiAgICBdO1xuICB9XG59XG4iXX0=
