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
var surveythumb_component_1 = require("./CityThumb/SurveyThumb/surveythumb.component");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkRBQTJEO0FBQzNELHVFQUFvRTtBQUNwRSx1RkFBb0Y7QUFDcEYsdUVBQW9FO0FBUXBFLElBQWEsZUFBZTtJQUE1QjtJQUVDLENBQUM7SUFBRCxzQkFBQztBQUFELENBRkQsQUFFRSxJQUFBO0FBRlcsZUFBZTtJQUwzQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxxQkFBWSxFQUFFLGlEQUFzQixDQUFDO1FBQy9DLFlBQVksRUFBRSxDQUFDLHdDQUFrQixFQUFFLDRDQUFvQixFQUFFLHdDQUFrQixDQUFDO1FBQzVFLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixDQUFDO0tBQzlCLENBQUM7R0FDVyxlQUFlLENBRTFCO0FBRlcsMENBQWUiLCJmaWxlIjoiYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkUm91dGluZ01vZHVsZSB9IGZyb20gJy4vZGFzaGJvYXJkLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFN1cnZleVRodW1iQ29tcG9uZW50fSBmcm9tICcuL0NpdHlUaHVtYi9TdXJ2ZXlUaHVtYi9zdXJ2ZXl0aHVtYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2l0eVRodW1iQ29tcG9uZW50fSBmcm9tICcuL0NpdHlUaHVtYi9jaXR5dGh1bWIuY29tcG9uZW50JztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBEYXNoYm9hcmRSb3V0aW5nTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRGFzaGJvYXJkQ29tcG9uZW50LCBTdXJ2ZXlUaHVtYkNvbXBvbmVudCwgQ2l0eVRodW1iQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW0Rhc2hib2FyZENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkTW9kdWxlIHtcbiAgXG4gfVxuIl19
