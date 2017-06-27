"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var citythumb_component_1 = require("./citythumb.component");
var CityRoutingModule = (function () {
    function CityRoutingModule() {
    }
    return CityRoutingModule;
}());
CityRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forRoot([
                { path: 'city', component: citythumb_component_1.CityThumbComponent }
            ])
        ],
        exports: [router_1.RouterModule]
    })
], CityRoutingModule);
exports.CityRoutingModule = CityRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvQ2l0eVRodW1iL2NpdHl0aHVtYi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkRBQTJEO0FBVTNELElBQWEsaUJBQWlCO0lBQTlCO0lBQWlDLENBQUM7SUFBRCx3QkFBQztBQUFELENBQWpDLEFBQWtDLElBQUE7QUFBckIsaUJBQWlCO0lBUjdCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHFCQUFZLENBQUMsT0FBTyxDQUFDO2dCQUNuQixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHdDQUFrQixFQUFFO2FBQ2hELENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDeEIsQ0FBQztHQUNXLGlCQUFpQixDQUFJO0FBQXJCLDhDQUFpQiIsImZpbGUiOiJhcHAvZGFzaGJvYXJkL0NpdHlUaHVtYi9jaXR5dGh1bWItcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENpdHlUaHVtYkNvbXBvbmVudCB9IGZyb20gJy4vY2l0eXRodW1iLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGUuZm9yUm9vdChbXG4gICAgICB7IHBhdGg6ICdjaXR5JywgY29tcG9uZW50OiBDaXR5VGh1bWJDb21wb25lbnQgfVxuICAgIF0pXG4gIF0sXG4gIGV4cG9ydHM6IFtSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIENpdHlSb3V0aW5nTW9kdWxlIHsgfVxuIl19
