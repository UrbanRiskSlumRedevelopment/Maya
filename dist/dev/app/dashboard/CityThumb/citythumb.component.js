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
        this.getCity = new core_1.EventEmitter();
        this.citynames = [
            { id: 1, name: 'Allahabad' },
            { id: 2, name: 'Bhagalpur' },
            { id: 3, name: 'Chennai' },
            { id: 4, name: 'Deherahun' },
            { id: 5, name: 'Eernakulam' },
            { id: 6, name: 'Firozabad' }
        ];
    }
    CityThumbComponent.prototype.cityClicked = function (cityname) {
        this.getCity.emit(cityname);
    };
    return CityThumbComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CityThumbComponent.prototype, "thumb", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], CityThumbComponent.prototype, "getCity", void 0);
CityThumbComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'citythumb',
        templateUrl: 'citythumb.component.html',
        styleUrls: ['citythumb.component.css'],
    }),
    __metadata("design:paramtypes", [])
], CityThumbComponent);
exports.CityThumbComponent = CityThumbComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL2NpdHl0aHVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0U7QUFZdEUsSUFBYSxrQkFBa0I7SUFLM0I7UUFGVSxZQUFPLEdBQXNCLElBQUksbUJBQVksRUFBRSxDQUFDO1FBR3hELElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUN4QixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUMxQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztTQUMzQixDQUFDO0lBQ0osQ0FBQztJQUVELHdDQUFXLEdBQVgsVUFBWSxRQUFRO1FBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFHSCx5QkFBQztBQUFELENBckJGLEFBcUJHLElBQUE7QUFuQlU7SUFBUixZQUFLLEVBQUU7O2lEQUFZO0FBQ1Y7SUFBVCxhQUFNLEVBQUU7OEJBQVUsbUJBQVk7bURBQTJCO0FBSGpELGtCQUFrQjtJQVI5QixnQkFBUyxDQUFFO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7S0FFdkMsQ0FBQzs7R0FFVyxrQkFBa0IsQ0FxQjVCO0FBckJVLGdEQUFrQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9jaXR5dGh1bWIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE91dHB1dCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiBMYXp5IGxvYWRlZCovXG5cbkBDb21wb25lbnQgKHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdjaXR5dGh1bWInLFxuICB0ZW1wbGF0ZVVybDogJ2NpdHl0aHVtYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaXR5dGh1bWIuY29tcG9uZW50LmNzcyddLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ2l0eVRodW1iQ29tcG9uZW50IHtcbiAgICBjaXR5bmFtZXM6IGFueVtdO1xuICAgIEBJbnB1dCgpIHRodW1iOiBhbnk7XG4gICAgQE91dHB1dCgpIGdldENpdHk6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmNpdHluYW1lcyA9IFtcbiAgICAgICAge2lkOiAxLCBuYW1lOiAnQWxsYWhhYmFkJ30sXG4gICAgICAgIHtpZDogMiwgbmFtZTogJ0JoYWdhbHB1cid9LFxuICAgICAgICB7aWQ6IDMsIG5hbWU6ICdDaGVubmFpJ30sXG4gICAgICAgIHtpZDogNCwgbmFtZTogJ0RlaGVyYWh1bid9LFxuICAgICAgICB7aWQ6IDUsIG5hbWU6ICdFZXJuYWt1bGFtJ30sXG4gICAgICAgIHtpZDogNiwgbmFtZTogJ0Zpcm96YWJhZCd9XG4gICAgICBdO1xuICAgIH1cblxuICAgIGNpdHlDbGlja2VkKGNpdHluYW1lKSB7XG4gICAgICB0aGlzLmdldENpdHkuZW1pdChjaXR5bmFtZSk7XG4gICAgfVxuXG5cbiAgfVxuIl19
