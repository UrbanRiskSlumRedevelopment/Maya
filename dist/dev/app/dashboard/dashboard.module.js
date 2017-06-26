"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dashboard_component_1 = require("./dashboard.component");
var dashboard_routing_module_1 = require("./dashboard-routing.module");
var surveythumb_component_1 = require("./SurveyThumb/surveythumb.component");
var citythumb_component_1 = require("./CityThumb/citythumb.component");
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, dashboard_routing_module_1.DashboardRoutingModule],
        declarations: [dashboard_component_1.DashboardComponent, surveythumb_component_1.SurveyThumbComponent, citythumb_component_1.CityThumbComponent],
        exports: [dashboard_component_1.DashboardComponent]
    })
], DashboardModule);
exports.DashboardModule = DashboardModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkRBQTJEO0FBQzNELHVFQUFvRTtBQUNwRSw2RUFBMEU7QUFDMUUsdUVBQW9FO0FBT3BFLElBQWEsZUFBZTtJQUE1QjtJQUErQixDQUFDO0lBQUQsc0JBQUM7QUFBRCxDQUEvQixBQUFnQyxJQUFBO0FBQW5CLGVBQWU7SUFMM0IsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksRUFBRSxpREFBc0IsQ0FBQztRQUMvQyxZQUFZLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSw0Q0FBb0IsRUFBRSx3Q0FBa0IsQ0FBQztRQUM1RSxPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csZUFBZSxDQUFJO0FBQW5CLDBDQUFlIiwiZmlsZSI6ImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IERhc2hib2FyZFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2Rhc2hib2FyZC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBTdXJ2ZXlUaHVtYkNvbXBvbmVudH0gZnJvbSAnLi9TdXJ2ZXlUaHVtYi9zdXJ2ZXl0aHVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2l0eVRodW1iQ29tcG9uZW50fSBmcm9tICcuL0NpdHlUaHVtYi9jaXR5dGh1bWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRGFzaGJvYXJkUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0Rhc2hib2FyZENvbXBvbmVudCwgU3VydmV5VGh1bWJDb21wb25lbnQsIENpdHlUaHVtYkNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtEYXNoYm9hcmRDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIERhc2hib2FyZE1vZHVsZSB7IH1cbiJdfQ==
